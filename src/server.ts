import fastify from 'fastify'
import { env } from './env'
import { getUsersRoutes } from './routes/user/get-user'
import { postUsersRoutes } from './routes/user/post-user'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)

app.register(getUsersRoutes)
app.register(postUsersRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Start Server!')
  })
