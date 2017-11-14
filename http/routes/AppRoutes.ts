import { Route } from '../models/Route'
import { AppController } from '../controllers/AppController'

export const AppRoutes = [new Route('get', '/', AppController.index)]
