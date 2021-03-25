import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'edionme',
  password: 'admin123',
  database: 'keep-api',
  autoLoadEntities: true,
  synchronize: true
}