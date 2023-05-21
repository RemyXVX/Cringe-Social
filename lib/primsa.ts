import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.DATABASE_ENABLED === 'true') {
  global.prisma = global.prisma || new PrismaClient();
}

export const prisma = global.prisma;