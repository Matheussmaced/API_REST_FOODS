import { randomUUID } from 'crypto'
import { z } from 'zod'
import { knex } from '../../database'
import { GetMealsOfUserDto } from '../../dto/meals/get-meals-of-user.dto'

export const postMealsOfUsersUseCase = async (body: GetMealsOfUserDto) => {
  const createMealsSchema = z.object({
    name_of_meal: z.string(),
  })

  // eslint-disable-next-line
  const { name_of_meal } = createMealsSchema.parse(body)

  await knex('meals').insert({
    id: randomUUID(),
    // eslint-disable-next-line
    name_of_meal,
  })
}
