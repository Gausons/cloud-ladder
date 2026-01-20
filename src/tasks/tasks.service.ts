import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma.service';
import { PlatformManagerService } from '../platforms/platform-manager/platform-manager.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private prisma: PrismaService,
    private platformManager: PlatformManagerService,
  ) {}

  create(userId: number, createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        ...createTaskDto,
        userId,
        status: 'draft',
      },
    });
  }

  findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number, userId: number) {
    return this.prisma.task.findFirst({
      where: { id, userId },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    return this.prisma.task.updateMany({
      where: { id, userId },
      data: updateTaskDto,
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.task.deleteMany({
      where: { id, userId },
    });
  }

  async publish(id: number, userId: number) {
    const task = await this.prisma.task.findFirst({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    const platforms = task.platforms.split(',').filter(p => p.trim() !== '');
    if (platforms.length === 0) {
      throw new Error('No platforms selected for this task');
    }

    // Get all user connected accounts
    const userAccounts = await this.prisma.platformAccount.findMany({
      where: { userId },
    });

    const results = [];
    let hasError = false;

    for (const platformName of platforms) {
      const account = userAccounts.find(acc => acc.platform === platformName);
      if (!account) {
        this.logger.warn(`User ${userId} has no connected account for ${platformName}`);
        results.push({ platform: platformName, status: 'failed', error: 'No connected account' });
        hasError = true;
        continue;
      }

      try {
        // Use the stored accessToken, or mock one if not present (for demo purposes)
        const token = account.accessToken || `mock_token_${account.id}`;
        const result = await this.platformManager.publishToPlatform(
          platformName,
          token,
          task.content || task.title,
          task.mediaUrl
        );
        results.push(result);
      } catch (err: any) {
        this.logger.error(`Failed to publish to ${platformName}`, err.stack);
        results.push({ platform: platformName, status: 'failed', error: err.message });
        hasError = true;
      }
    }

    // Update task status
    const newStatus = hasError ? 'partial_success' : 'published';
    await this.prisma.task.update({
      where: { id },
      data: { status: newStatus },
    });

    return {
      taskId: id,
      status: newStatus,
      results,
    };
  }
}
