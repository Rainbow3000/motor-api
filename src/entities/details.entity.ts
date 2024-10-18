import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';

@Entity('details')
export class DetailsEntity extends BaseEntity {
  @Column({ type: 'json', nullable: false })
  description: unknown;

  @Column({ type: 'int', nullable: true, name: 'product_id' })
  productId: number;

  @OneToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;
}
