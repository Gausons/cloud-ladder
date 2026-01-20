export interface SocialPlatform {
  name: string;
  publish(accessToken: string, content: string, mediaUrl?: string): Promise<any>;
}
