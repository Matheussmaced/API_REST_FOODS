import { FastifyInstance } from 'fastify'
import { checkSessionIdExist } from '../../middlewares/check-session-id-exist'
import { getMealsOfUserUseCase } from '../../useCase/user/get-meals-of-user.use-case'

export async function getMealsOfUserRoutes(app: FastifyInstance) {
  app.get('/users/meals', { preHandler: [checkSessionIdExist] }, async () => {
    const meals = await getMealsOfUserUseCase()

    return meals
  })
}
