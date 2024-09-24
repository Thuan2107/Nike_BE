import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { In, Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private categoryService: CategoriesService
  ){}

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async findAll(categoryId: number) {
    if(categoryId == -1){
      return await this.productRepository.find();
    }

    const category = await this.categoryService.findOne(categoryId)

    if(!category){
      throw new HttpException("category_id không tồn tại", 400)
    }

    return await this.findProductByIds(category.products)
  }

  findOne(id: number) {
    const product = this.productRepository.findOne({ where: {id} });
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }

  async findProductByIds(ids: number[]){
    return await this.productRepository.find({where: {id: In(ids)}})
  }
} 
