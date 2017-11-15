import * as Koa from 'koa'
import * as BodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import { Route } from './models/Route'

export class App {
  public server: any
  private Koa: Koa
  private port: number
  private router: Router

  constructor(port: number, routes: Route[]) {
    this.port = port
    this.Koa = new Koa()
    this.router = new Router()

    this.setupRoutes(routes)
    this.setupMiddleware()
  }

  public listen(): void {
    this.server = this.Koa.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    )
  }

  private setupMiddleware(): void {
    this.Koa.use(BodyParser())
    this.Koa.use(this.router.routes())
  }

  private setupRoutes(routes: Route[]): void {
    routes.forEach(route => {
      switch (route.method) {
        case 'get':
          this.router.get(route.path, route.action)
          break
        case 'post':
          this.router.post(route.path, route.action)
          break
        case 'put':
          this.router.put(route.path, route.action)
          break
        case 'patch':
          this.router.patch(route.path, route.action)
          break
        case 'delete':
          this.router.delete(route.path, route.action)
          break
        default:
          break
      }
    })
  }
}
