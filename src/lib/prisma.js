import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import pg from 'pg'

const directUrl = process.env.DIRECT_URL
const pool = new pg.Pool({ connectionString: directUrl })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

export { prisma }