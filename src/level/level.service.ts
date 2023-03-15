import { PrismaClient } from '@prisma/client'
import LevelRepository from './level.repository'
import { LevelCreateRequest } from './level.protocol'
import HttpException from '../shared/http-exception'

const prisma = new PrismaClient()

export default class LevelService {
  levelRepository: LevelRepository

  constructor() {
    this.levelRepository = new LevelRepository(prisma)
  }

  async list() {
    try {
      return this.levelRepository.findMany({
        include: {
          developers: true
        }
      })
    } catch (error) {
      HttpException(error)
    }
  }

  async create(data: LevelCreateRequest) {
    try {
      return await this.levelRepository.create({
        data
      })
    } catch (error) {
      HttpException(error)
    }
  }

  async update(id: number, data: LevelCreateRequest) {
    try {
      return await this.levelRepository.update({
        data,
        where: {
          id
        }
      })
    } catch (error) {
      HttpException(error)
    }
  }

  async delete(id: number) {
    try {
      return await this.levelRepository.delete({
        where: {
          id
        }
      })
    } catch (error) {
      HttpException(error)
    }
  }
}
