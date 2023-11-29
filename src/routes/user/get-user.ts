import { FastifyInstance } from 'fastify'
import { getUserUseCase } from '../../useCase/user/get-user.use-case'

export async function getUsersRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await getUserUseCase()

    return users
  })
}
