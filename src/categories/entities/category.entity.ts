import { BaseEntity } from "src/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category extends BaseEntity{

    @Column()
    name: string

    @Column('json', {default: () => "'[]'", nullable: false } )
    products: number[]

    @Column({comment: 'hình danh mục'})
    cover: string

    @Column()
    status: number

}
