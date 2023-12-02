import fastify from 'fastify'
import { env } from './env'
import { getUsersRoutes } from './routes/user/get-user'
import { postUsersRoutes } from './routes/user/post-user'
import cookie from '@fastify/cookie'

import { getMealsOfUserRoutes } from './routes/meals/get-meals-of-user'
import { mealsOfUserRoutes } from './routes/meals/post-meals-of-user'

const app = fastify()

app.register(cookie)

app.register(getUsersRoutes)
app.register(postUsersRoutes)
app.register(getMealsOfUserRoutes)
app.register(mealsOfUserRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Start Server!')
  })
