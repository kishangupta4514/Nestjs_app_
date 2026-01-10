import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5434/nest?schema=public';
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        
        super({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        })
    }
}
 