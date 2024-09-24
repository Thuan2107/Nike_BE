import { IsNumber, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    name: string

    @IsString()
    cover: string

    @IsNumber()
    status: number
}
