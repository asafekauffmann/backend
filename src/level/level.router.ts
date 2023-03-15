import express from 'express'
import LevelController from './level.controller'

class LevelRoutes {
  public router: express.Router = express.Router()
  private levelController = new LevelController()

  constructor() {
    this.router.get('/list', this.levelController.list)
    this.router.post('/', this.levelController.create)
    this.router.put('/:id', this.levelController.update)
    this.router.delete('/:id', this.levelController.delete)
  }
}

export default new LevelRoutes().router
