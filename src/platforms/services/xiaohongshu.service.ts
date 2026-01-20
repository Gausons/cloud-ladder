import { Injectable, Logger } from '@nestjs/common';
import { SocialPlatform } from '../interfaces/social-platform.interface';

@Injectable()
export class XiaohongshuService implements SocialPlatform {
  name = 'xiaohongshu';
  private readonly logger = new Logger(XiaohongshuService.name);

  async publish(accessToken: string, content: string, mediaUrl?: string): Promise<any> {
    this.logger.log(`Publishing to Xiaohongshu with token ${accessToken}...`);
    
    // Simulate API Call
    
    return new Promise((resolve) => {
      setTimeout(() => {
        this.logger.log(`Successfully published to Xiaohongshu: ${content.substring(0, 20)}...`);
        resolve({
          platform: 'xiaohongshu',
          status: 'success',
          postId: `xhs_${Date.now()}`,
          message: 'Note published successfully'
        });
      }, 1200);
    });
  }
}
