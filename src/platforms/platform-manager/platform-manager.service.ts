import { Injectable, Logger } from '@nestjs/common';
import { SocialPlatform } from '../interfaces/social-platform.interface';
import { TikTokService } from '../services/tiktok.service';
import { XiaohongshuService } from '../services/xiaohongshu.service';

@Injectable()
export class PlatformManagerService {
  private platforms: Map<string, SocialPlatform> = new Map();
  private readonly logger = new Logger(PlatformManagerService.name);

  constructor(
    private tiktokService: TikTokService,
    private xiaohongshuService: XiaohongshuService,
  ) {
    this.registerPlatform(tiktokService);
    this.registerPlatform(xiaohongshuService);
  }

  private registerPlatform(platform: SocialPlatform) {
    this.platforms.set(platform.name, platform);
  }

  getPlatform(name: string): SocialPlatform | undefined {
    return this.platforms.get(name);
  }

  async publishToPlatform(platformName: string, accessToken: string, content: string, mediaUrl?: string) {
    const platform = this.getPlatform(platformName);
    if (!platform) {
      this.logger.error(`Platform ${platformName} not found`);
      throw new Error(`Platform ${platformName} not supported`);
    }
    return platform.publish(accessToken, content, mediaUrl);
  }
}
