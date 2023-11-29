import { FastifyInstance } from 'fastify'
import { getUserUseCase } from '../../useCase/user/get-user.use-case'
import { checkSessionIdExist } from '../../middlewares/check-session-id-exist'

export async function getUsersRoutes(app: FastifyInstance) {
  app.get('/users', { preHandler: [checkSessionIdExist] }, async () => {
    const users = await getUserUseCase()

    return users
  })
}
