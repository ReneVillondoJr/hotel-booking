import 'dotenv/config';

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('🌱 Starting seed...');

  const password = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.upsert({
    where: {
      email: 'admin@hotel.com',
    },
    update: {
      password,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
    create: {
      name: 'Hotel Administrator',
      email: 'admin@hotel.com',
      password,
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  });

  console.log('✅ User:', admin.email);
  console.log('🔑 Password: password123');
  console.log('👤 Role:', admin.role);
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
