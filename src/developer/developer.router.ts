import express from 'express'
import DeveloperController from './developer.controller'

class DeveloperRoutes {
  public router: express.Router = express.Router()
  private developerController = new DeveloperController()

  constructor() {
    this.router.get('/list', this.developerController.list)
    this.router.post('/', this.developerController.create)
    this.router.put('/:id', this.developerController.update)
    this.router.delete('/:id', this.developerController.delete)
  }
}

export default new DeveloperRoutes().router
