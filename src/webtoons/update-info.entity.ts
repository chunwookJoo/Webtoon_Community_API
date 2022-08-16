import { BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class UpdateInfo extends BaseEntity {
  @Column({ nullable: false })
  new: number;

  @Column({ nullable: false })
  changed: number;

  @Column({ nullable: false })
  removed: number;

  @Column({ nullable: false })
  total: number;

  @Column({ nullable: false })
  date: Date;
}
