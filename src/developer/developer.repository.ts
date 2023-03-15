import { Developer, Prisma, PrismaClient } from '@prisma/client'

export default class DeveloperRepository {
  prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async findMany(
    options: Prisma.DeveloperFindManyArgs
  ): Promise<Developer[] | void> {
    return this.prisma.developer.findMany(options)
  }

  async create(options: Prisma.DeveloperCreateArgs): Promise<Developer | void> {
    return this.prisma.developer.create(options)
  }

  async update(options: Prisma.DeveloperUpdateArgs): Promise<Developer> {
    return this.prisma.developer.update(options)
  }

  async delete(options: Prisma.DeveloperDeleteArgs): Promise<Developer> {
    return this.prisma.developer.delete(options)
  }
}
