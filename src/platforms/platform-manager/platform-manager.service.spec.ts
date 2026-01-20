import { Test, TestingModule } from '@nestjs/testing';
import { PlatformManagerService } from './platform-manager.service';

describe('PlatformManagerService', () => {
  let service: PlatformManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatformManagerService],
    }).compile();

    service = module.get<PlatformManagerService>(PlatformManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
