import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsEntity } from 'src/entities/details.entity';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetailsEntity])],
  providers: [DetailsService],
  controllers: [DetailsController],
})
export class DetailsModule {}
