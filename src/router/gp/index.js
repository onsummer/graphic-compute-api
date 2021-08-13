import { isClockWise } from "./relationship/clockwise/index.js"


/**
 * 
 * @param {import("fastify").FastifyInstance} app 
 * @param {*} options 
 */
const gpRoutes = async (app, options) => {
  app.get('/gp', async (request, reply) => {
    return { hello: 'world' }
  })

  app.post('/gp/clockwise', async (request, reply) => {
    const body = request.body
    // @ts-ignore
    const data = body.data
    return isClockWise(data)
  })
}

export {
  gpRoutes
}