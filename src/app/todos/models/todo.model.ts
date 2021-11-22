export class Todo {
  public id: number;
  public content: string;
  public status: boolean;

  constructor(content: string) {
    this.content = content;
    this.id = new Date().getTime();
    this.status = false;
  }
}