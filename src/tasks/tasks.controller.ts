import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Request() req, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(req.user.userId, createTaskDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.tasksService.findOne(+id, req.user.userId);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto, req.user.userId);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.tasksService.remove(+id, req.user.userId);
  }

  @Post(':id/publish')
  publish(@Request() req, @Param('id') id: string) {
    return this.tasksService.publish(+id, req.user.userId);
  }
}
