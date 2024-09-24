import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AssignProductsDto } from './dto/assign-products.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('/create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('/list')
  findAll() {
    return this.categoriesService.findAll(); 
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Post('/:id/update')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Post(':id/delete')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }

  @Post(':id/assign')
    assign(@Param('id') id: string, @Body() body: AssignProductsDto) {
      return this.categoriesService.assignProducts(+id, body);
    }
}
