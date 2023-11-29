import { randomUUID } from 'crypto'
import { knex } from '../../database'
import { z } from 'zod'
import { PostUserDto } from '../../dto/user/post-user.dto'

export const postUserUseCase = async (body: PostUserDto) => {
  const createUserSchema = z.object({
    name: z.string(),
    last_name: z.string(),
    email: z.string(),
  })
  // eslint-disable-next-line
  const { name, last_name, email } = createUserSchema.parse(body)

  await knex('users').insert({
    id: randomUUID(),
    name,
    // eslint-disable-next-line
    last_name,
    email,
  })
}
