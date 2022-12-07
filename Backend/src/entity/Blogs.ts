import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"


//Creating entities for typeORM 
@Entity('blogs')
export class Blogs {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({
        unique:true
    })
    slug: string
    @Column()
    content: string
    @Column()
    image: string
    @Column({
        type: 'timestamptz'
        
    }
    )
    published_at: Date
    

}
