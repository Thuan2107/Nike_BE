import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    status_id: number
    
    @IsNumber()
    type_id: number
    
    @IsString()
    image: string
        
    @IsArray()
    images: string[]

    @IsString()
    description: string
    
    @IsArray() 
    sizes: number[]
    
    @IsArray()
    colors: string[]
}
