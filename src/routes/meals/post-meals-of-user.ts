import { FastifyInstance } from 'fastify'

import { checkSessionIdExist } from '../../middlewares/check-session-id-exist'
import { postMealsOfUsersUseCase } from '../../useCase/meals/post-meals-of-user.use-case'
import { GetMealsOfUserDto } from '../../dto/meals/get-meals-of-user.dto'

export async function mealsOfUserRoutes(app: FastifyInstance) {
  app.post<{ Body: GetMealsOfUserDto }>(
    '/users/meals',
    { preHandler: [checkSessionIdExist] },
    async (req, reply) => {
      try {
        await postMealsOfUsersUseCase(req.body)

        return reply.status(201).send()
      } catch (error) {
        return reply.status(500).send()
      }
    },
  )
}
