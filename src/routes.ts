import express from 'express'
import levelRouter from './level/level.router'
import developerRouter from './developer/developer.router'

export default function routes(app: express.Application) {
  app.use('/level', levelRouter)
  app.use('/developer', developerRouter)
}
