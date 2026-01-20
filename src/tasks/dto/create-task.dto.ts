export class CreateTaskDto {
  title: string;
  content?: string;
  mediaUrl?: string;
  platforms: string; // "tiktok,xiaohongshu"
}
