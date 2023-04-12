import { AppDataSource } from './data-source.js'
import { User } from './entity/user.js'
import { setupExpress } from './express.js'

AppDataSource.initialize().then(async () => {
  console.log('Inserting a new user into the database...')
  const user = new User()
  user.name = 'Timber'
  user.meta = '{ "hello": "world" }'
  await AppDataSource.manager.save(user)
  console.log(`Saved a new user with id: ${user.id}`)

  console.log('Loading users from the database...')
  const users = await AppDataSource.manager.find(User)
  console.log('Loaded users: ', users)

  console.log('Here you can setup and run express / fastify / any other framework.')

  setupExpress()
}).catch(error => console.log(error))
