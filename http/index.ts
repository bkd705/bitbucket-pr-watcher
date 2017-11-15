import { App } from './App'
import { AppRoutes } from './routes/AppRoutes'
import { BitbucketRoutes } from './routes/BitbucketRoutes'

const port = Number(process.env.PORT) || 3000

const app = new App(port, [...AppRoutes, ...BitbucketRoutes])

app.listen()

export const server = app.server
