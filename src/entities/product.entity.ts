import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { BaseEntity } from './base.entity';
import { CommentEntity } from './comment.entity';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'longtext', nullable: true })
  image: string;

  @Column({ type: 'text', name: 'price', nullable: false })
  price: string;

  @Column({ type: 'int', default: 10 })
  sold: number;

  @Column({ type: 'int', name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.product)
  comments: CommentEntity[];
}
