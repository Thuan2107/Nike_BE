import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsString, IsNumber, IsArray, ArrayMinSize } from 'class-validator';

export class AssignProductsDto {

    @IsArray()
    @ArrayMinSize(1)
    products: number[]
}
