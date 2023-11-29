import { FastifyInstance } from 'fastify'
import { checkSessionIdExist } from '../../middlewares/check-session-id-exist'
import { knex } from '../../database'

export async function getMealsOfUserRoutes(app: FastifyInstance) {
  app.get('/users/meals', { preHandler: [checkSessionIdExist] }, async () => {
    const meals = await knex('meals').select('*')

    return meals
  })
}
