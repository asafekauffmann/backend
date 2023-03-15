import { Level, Prisma, PrismaClient } from '@prisma/client'

export default class LevelRepository {
  prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async findMany(options: Prisma.LevelFindManyArgs): Promise<Level[] | void> {
    return this.prisma.level.findMany(options)
  }

  async create(options: Prisma.LevelCreateArgs): Promise<Level | void> {
    return this.prisma.level.create(options)
  }

  async update(options: Prisma.LevelUpdateArgs): Promise<Level> {
    return this.prisma.level.update(options)
  }

  async delete(options: Prisma.LevelDeleteArgs): Promise<Level> {
    return this.prisma.level.delete(options)
  }
}
