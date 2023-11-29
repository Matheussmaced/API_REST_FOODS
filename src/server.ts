import fastify from 'fastify'
import { env } from './env'
import { getUsersRoutes } from './routes/user/get-user'
import { postUsersRoutes } from './routes/user/post-user'

const app = fastify()

app.register(getUsersRoutes)

app.register(postUsersRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Start Server!')
  })
