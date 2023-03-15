import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.developer.create({
    data: {
      name: 'Asafe',
      genre: 'M',
      birth: new Date('10-09-1995'),
      age: 27,
      hobby: 'Sports & Music',
      Level: {
        create: {
          level: 0
        }
      }
    }
  })

  await prisma.developer.create({
    data: {
      name: 'Mark Zuckerberg',
      genre: 'M',
      birth: new Date('01-01-1985'),
      age: 38,
      hobby: 'Chinese & Skateboarding',
      Level: {
        create: {
          level: 1
        }
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
