import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';
import { AssignProductsDto } from './dto/assign-products.dto';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @Inject(forwardRef(() => ProductService))
    private productsService: ProductService

  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(createCategoryDto)

    return await this.categoryRepository.save(newCategory)
  }

  async assignProducts(categoryId: number, assignProductsDto: AssignProductsDto){
    const products = await this.productsService.findProductByIds(assignProductsDto.products)

    if(products.length != assignProductsDto.products.length){
      throw new HttpException("Danh sách sản phẩm không hợp lệ", 400) 
    }

    return this.categoryRepository.update(categoryId, assignProductsDto)
  }

  async findAll() {
    return await this.categoryRepository.find()
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({where: {id}})
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({where: {id}})

    category.name = updateCategoryDto.name
    category.cover = updateCategoryDto.cover
    category.status = updateCategoryDto.status

    return  await this.categoryRepository.update(id, category)
  }

  async remove(id: number) {
    return await this.categoryRepository.delete({id})
  }

}
