import { Request, Response } from 'express'
import LevelService from './level.service'
import * as Joi from 'joi'
import BadRequestError from '../shared/errors/bad-request.error'

export default class LevelController {
  levelService: LevelService

  constructor() {
    this.levelService = new LevelService()
  }

  list = async (req: Request, res: Response) => {
    try {
      const data = await this.levelService.list()
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const schema = Joi.object().keys({
        level: Joi.number().required()
      })

      const result = schema.validate(req.body)

      if (result.error) {
        throw new BadRequestError(result.error.message)
      }

      const data = await this.levelService.create(req.body)

      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const schema = Joi.object().keys({
        level: Joi.number().required()
      })

      const result = schema.validate(req.body)

      if (result.error) {
        throw new BadRequestError(result.error.message)
      }

      const data = await this.levelService.update(+req.params.id, req.body)
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const data = await this.levelService.delete(+req.params.id)
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }
}
