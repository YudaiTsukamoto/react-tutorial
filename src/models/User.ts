export class User {
  id: string;
  name: string;
  pictureUrl?: string;

  hasPicture(): boolean {
    return !!this.pictureUrl;
  }
}
