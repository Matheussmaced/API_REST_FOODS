import { FastifyInstance } from 'fastify'

import { PostUserDto } from '../../dto/user/post-user.dto'
import { postUserUseCase } from '../../useCase/user/post-user.use-case'

export async function postUsersRoutes(app: FastifyInstance) {
  app.post<{ Body: PostUserDto }>('/users', async (req, reply) => {
    try {
      await postUserUseCase(req.body)

      return reply.status(201).send()
    } catch (error) {
      return reply.status(500).send()
    }
  })
}
