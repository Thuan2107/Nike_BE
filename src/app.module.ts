import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Product } from './product/entities/product.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '139.162.61.24',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'minhthuan',
      entities: [Product, Category],
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([Product, Category]),
    ProductModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
