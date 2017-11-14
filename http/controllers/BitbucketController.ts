import { IRouterContext } from 'koa-router'
import { WebsocketController } from './WebsocketController'

export class BitbucketController {
  public static async webhook(ctx: IRouterContext) {
    const body: object = ctx.request.body
    const event: string = ctx.headers['x-event-key']

    WebsocketController.handleWebhook(event, body)

    ctx.status = 200
  }
}
