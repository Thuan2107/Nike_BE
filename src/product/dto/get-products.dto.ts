import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class GetProductsDto {

    @IsNotEmpty()
    @IsNumber()
    category_id: number = -1;

}
