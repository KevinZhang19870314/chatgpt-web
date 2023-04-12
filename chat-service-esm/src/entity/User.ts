import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: number

  @Column()
    name: string

  @Column({ nullable: true })
    password: string

  @Column({ default: 10, name: 'total_requests' })
    totalRequests: number

  @Column({ default: 10, name: 'used_requests' })
    usedRequests: number

  @Column({ name: 'charged_amount', type: 'decimal', nullable: true, precision: 13, scale: 2 })
    chargedAmount: number

  @Column('longtext')
    meta: string
}
