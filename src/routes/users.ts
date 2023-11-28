import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await knex('users').select('*')

    return {
      users,
    }
  })

  app.post('/users', async (req, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
      last_name: z.string(),
      email: z.string(),
    })

    // eslint-disable-next-line
    const { name, last_name, email } = createUserSchema.parse(req.body)

    await knex('users').insert({
      id: randomUUID(),
      name,
      // eslint-disable-next-line
      last_name,
      email,
    })

    return reply.status(201).send()
  })
}
