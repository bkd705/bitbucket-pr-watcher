import { IRouterContext } from 'koa-router'

export class Route {
  public method: string
  public path: string
  public action: (ctx: IRouterContext) => void

  constructor(method: string, path: string, action: (ctx: IRouterContext) => void) {
    this.method = method
    this.path = path
    this.action = action
  }
}