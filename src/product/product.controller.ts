import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsDto } from './dto/get-products.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('/list')
  findAll(@Query('category_id') category_id: number = -1) {
    console.log(category_id);
    
    // return this.productService.findAll(category_id);
  } 

  @Get('/:id') 
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
 
  @Post('/upadte/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Post('/delete/:id') 
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
