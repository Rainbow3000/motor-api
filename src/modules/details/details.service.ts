import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailsEntity } from 'src/entities/details.entity';
import { Repository } from 'typeorm';
import { TResult } from 'src/common/types';
import { CreateDetailsDto, UpdateDetailsDto } from './details.dto';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(DetailsEntity)
    private readonly detailsRepository: Repository<DetailsEntity>,
  ) {}

  async create(payload: CreateDetailsDto) {
    const desc = await this.detailsRepository.findOneBy({
      productId: payload.productId,
    });

    if (desc) {
      this.update(payload, desc.id);
    }

    await this.detailsRepository.insert(payload);

    return { statusCode: 201, message: 'success' } as TResult;
  }

  async update(payload: UpdateDetailsDto, id: number) {
    const desc = await this.detailsRepository.findOneBy({ id });

    if (!desc) throw new NotFoundException();

    await this.detailsRepository.update({ id }, payload);

    return { statusCode: 200, message: 'success' } as TResult;
  }

  async delete(id: number) {
    const desc = await this.detailsRepository.findOneBy({ id });

    if (!desc) throw new NotFoundException();

    await this.detailsRepository.delete({ id });

    return {
      statusCode: 200,
      message: 'Xoá chi tiết sản phẩm thành công',
    } as TResult;
  }

  async list() {
    const data = await this.detailsRepository.find();

    return {
      data,
      statusCode: 200,
    } as TResult;
  }

  async single(id: number) {
    const desc = await this.detailsRepository.findOneBy({ id });

    return { data: desc, message: 'success' } as TResult;
  }

  async singleByProduct(id: number) {
    const desc = await this.detailsRepository.findOneBy({ productId: id });

    return { data: desc, message: 'success' } as TResult;
  }
}
