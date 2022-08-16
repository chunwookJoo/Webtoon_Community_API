import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Webtoon extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  author: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  img: string;

  @Column({ nullable: false })
  service: string;

  @Column({ nullable: false })
  week: number[];

  @Column({ nullable: false })
  additional: WebtoonObject.Additional;
}
