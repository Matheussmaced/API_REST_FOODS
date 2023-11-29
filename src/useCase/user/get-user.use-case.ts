import { knex } from '../../database'
import { GetUserDto } from '../../dto/user/get-user.dto'

export const getUserUseCase = async (): Promise<GetUserDto[]> => {
  const users = await knex('users').select('*')

  return users
}
