import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { GenerateContentDto } from './dto/generate-content.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate')
  generate(@Body() generateContentDto: GenerateContentDto) {
    return this.aiService.generateContent(generateContentDto);
  }
}
