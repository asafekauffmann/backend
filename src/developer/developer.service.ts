import { PrismaClient } from '@prisma/client'
import DeveloperRepository from './developer.repository'
import { DeveloperCreateRequest } from './developer.protocol'
import HttpException from '../shared/http-exception'

const prisma = new PrismaClient()

export default class DeveloperService {
  developerRepository: DeveloperRepository

  constructor() {
    this.developerRepository = new DeveloperRepository(prisma)
  }

  async list() {
    try {
      return this.developerRepository.findMany({})
    } catch (error) {
      HttpException(error)
    }
  }

  async create(data: DeveloperCreateRequest) {
    try {
      data.birth = new Date(data.birth)

      return await this.developerRepository.create({
        data
      }) 
    } catch (error) { console.log(error)
      HttpException(error)
    }
  }

  async update(id: number, data: DeveloperCreateRequest) {
    try {
      data.birth = new Date(data.birth)

      return await this.developerRepository.update({
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
      return await this.developerRepository.delete({
        where: {
          id
        }
      })
    } catch (error) {
      HttpException(error)
    }
  }
}
