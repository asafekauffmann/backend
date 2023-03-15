import { Request, Response } from 'express'
import DeveloperService from './developer.service'
import * as Joi from 'joi'
import BadRequestError from '../shared/errors/bad-request.error'

export default class DeveloperController {
  developerService: DeveloperService

  constructor() {
    this.developerService = new DeveloperService()
  }

  list = async (req: Request, res: Response) => {
    try {
      const data = await this.developerService.list()
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        genre: Joi.string().required().length(1),
        birth: Joi.string().required(),
        age: Joi.number().required(),
        hobby: Joi.string().required(),
        levelId: Joi.number().required()
      })

      const result = schema.validate(req.body)

      if (result.error) {
        throw new BadRequestError(result.error.message)
      }

      const data = await this.developerService.create(req.body)

      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        genre: Joi.string().required().length(1),
        birth: Joi.string().required(),
        age: Joi.number().required(),
        hobby: Joi.string().required(),
        levelId: Joi.number().required()
      })

      const result = schema.validate(req.body)

      if (result.error) {
        throw new BadRequestError(result.error.message)
      }

      const data = await this.developerService.update(+req.params.id, req.body)
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const data = await this.developerService.delete(+req.params.id)
      res.json(data)
    } catch (error: any) {
      res.status(error.statusCode).json(error.body)
    }
  }
}
