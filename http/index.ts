import { App } from './App'
import { AppRoutes } from './routes/AppRoutes'

const port = Number(process.env.PORT) || 3000

const server = new App(port, [...AppRoutes])

server.listen()
