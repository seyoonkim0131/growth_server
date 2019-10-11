import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
class Board extends BaseEntity {

    @PrimaryColumn() no: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    body: string

    @Column({type: 'text'})
    file: string
    
    @Column({type: 'text'})
    createId: string
    
    @CreateDateColumn()
    createDate: string

    @Column({type: 'text'})
    updateId: string
    
    @UpdateDateColumn()
    updateDate: string
}

export default Board