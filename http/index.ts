import { App } from './App'
import { AppRoutes } from './routes/AppRoutes'
import { BitbucketRoutes } from './routes/BitbucketRoutes'

const port = Number(process.env.PORT) || 3000

const server = new App(port, [...AppRoutes, ...BitbucketRoutes])

server.listen()
