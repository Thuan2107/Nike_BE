import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Transform } from 'class-transformer';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number

    
    @IsNumber()
    statusId: number
    
    @IsNumber()
    typeId: number
    
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
