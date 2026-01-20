import { Injectable } from '@nestjs/common';
import { GenerateContentDto } from './dto/generate-content.dto';

@Injectable()
export class AiService {
  async generateContent(generateContentDto: GenerateContentDto) {
    // Mock implementation for AI content generation
    // In a real scenario, this would call OpenAI, Anthropic, etc.
    
    const { prompt, platform } = generateContentDto;
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1500));

    let content = '';
    
    if (platform === 'xiaohongshu') {
      content = `Here is a generated post for Xiaohongshu based on "${prompt}":\n\n✨ Amazing discovery! ✨\n\n${prompt} is absolutely a game changer! 💖 I tried it yesterday and was blown away. \n\n#Lifestyle #Recommendation #DailyVlog`;
    } else if (platform === 'tiktok') {
      content = `[TikTok Script]\n\nScene 1: Host smiles at camera.\nHost: "You won't believe this trick about ${prompt}!"\n\nScene 2: Demonstration.\n(Show ${prompt} in action)\n\nScene 3: Results.\nHost: "Try it yourself and let me know!"\n\n#fyp #hacks #trending`;
    } else {
      content = `Generated content for ${prompt}:\n\nThis is a generic AI response. It seems you are interested in ${prompt}. Here are some key points:\n1. It's popular.\n2. It's effective.\n3. Everyone is talking about it.`;
    }

    return {
      content,
      generatedAt: new Date().toISOString(),
    };
  }
}
