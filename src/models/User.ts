export class User {
  id: number;
  name: string;
  pictureUrl?: string;

  hasPicture(): boolean {
    return !!this.pictureUrl;
  }
}
