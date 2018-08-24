export class MessageCreate {
  constructor(
    public name: string,
    public email: string,
    public subject: string,
    public message: string
  ) { }
}
