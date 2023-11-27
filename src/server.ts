import fastify from "fastify";

const app = fastify()

app.get('/users', () => {
  return 'Users'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('Start Server!')
})