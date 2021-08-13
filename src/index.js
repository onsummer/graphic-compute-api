import fastify from "fastify"

const app = fastify({
  logger: true
})

app.get('/', async (request, reply) => {
  return {
    msg: 'Hello, Point.'
  }
})

const start = async () => {
  try {
    app.listen(3018, '0.0.0.0', (err, address) => {
      if (err) {
        throw err
      }
    })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()