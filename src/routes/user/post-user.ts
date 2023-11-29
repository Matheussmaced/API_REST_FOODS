import { FastifyInstance } from 'fastify'

import { PostUserDto } from '../../dto/user/post-user.dto'
import { postUserUseCase } from '../../useCase/user/post-user.use-case'
import { randomUUID } from 'crypto'
import { checkSessionIdExist } from '../../middlewares/check-session-id-exist'

export async function postUsersRoutes(app: FastifyInstance) {
  app.post<{ Body: PostUserDto }>(
    '/users',
    { preHandler: [checkSessionIdExist] },
    async (req, reply) => {
      let sessionId = req.cookies.sessionId

      if (!sessionId) {
        sessionId = randomUUID()

        reply.cookie('sessionId', sessionId, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        })
      }

      try {
        await postUserUseCase(req.body, sessionId)

        return reply.status(201).send()
      } catch (error) {
        return reply.status(500).send()
      }
    },
  )
}
