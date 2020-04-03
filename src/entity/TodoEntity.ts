import shortid from "shortid";

export class TodoEntity {
  constructor(
    readonly uid: string,
    readonly title: string,
    readonly done: boolean
  ) {}
  static create(title: string, done: boolean = false): TodoEntity {
    return new TodoEntity(shortid.generate(), title, done);
  }

  changeTitle(title: string): TodoEntity {
    return new TodoEntity(this.uid, title, this.done);
  }

  changeDone(done: boolean): TodoEntity {
    return new TodoEntity(this.uid, this.title, done);
  }
}
