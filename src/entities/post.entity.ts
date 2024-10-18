import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('post')
export class PostEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false, unique: true })
  title: string;

  @Column({ type: 'json', nullable: false })
  description: unknown;

  @Column({ type: 'longtext', nullable: true })
  image: string;
}
