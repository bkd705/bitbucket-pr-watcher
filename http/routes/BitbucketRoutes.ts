import { Route } from '../models/Route'
import { BitbucketController } from '../controllers/BitbucketController'

export const BitbucketRoutes = [
  new Route('post', '/webook', BitbucketController.webhook),
]
