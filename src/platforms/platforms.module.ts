import { Module, Global } from '@nestjs/common';
import { PlatformManagerService } from './platform-manager/platform-manager.service';
import { TikTokService } from './services/tiktok.service';
import { XiaohongshuService } from './services/xiaohongshu.service';

@Global()
@Module({
  providers: [PlatformManagerService, TikTokService, XiaohongshuService],
  exports: [PlatformManagerService],
})
export class PlatformsModule {}
