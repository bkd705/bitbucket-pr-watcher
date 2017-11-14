import { IRouterContext } from 'koa-router'

export class AppController {
  public static async index(ctx: IRouterContext) {
    ctx.status = 200
  }
}
