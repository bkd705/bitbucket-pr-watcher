import { IRouterContext } from 'koa-router'

export class BitbucketController {
  public static async webhook(ctx: IRouterContext) {
    console.log(ctx.body)
    ctx.status = 200
  }
}
