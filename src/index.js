import fastify from "fastify"
import { gpRoutes } from "./router/gp/index.js"

const app = fastify({
  logger: true
})

app.get('/', async (request, reply) => {
  return {
    msg: 'Hello, Point.'
  }
})
app.register(gpRoutes)

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