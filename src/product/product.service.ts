import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){}

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  findOne(id: number) {
    const product = this.productRepository.findOne({ where: {id} });
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
} 
