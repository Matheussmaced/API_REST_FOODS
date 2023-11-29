import { knex } from '../../database'
import { GetMealsOfUserDto } from '../../dto/meals/get-meals-of-user.dto'

export const getMealsOfUserUseCase = async (): Promise<GetMealsOfUserDto[]> => {
  const mealsUser = await knex('meals').select('*')

  return mealsUser
}
