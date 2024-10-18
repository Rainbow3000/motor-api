import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { TResult } from 'src/common/types';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async create(payload: CreatePostDto) {
    await this.postRepository.insert(payload);

    return { statusCode: 201, message: 'success' } as TResult;
  }

  async update(payload: UpdatePostDto, id: number) {
    const post = await this.postRepository.findOneBy({ id });

    if (!post) throw new NotFoundException();

    await this.postRepository.update({ id }, payload);

    return { statusCode: 201, message: 'success' } as TResult;
  }

  async list() {
    const post = await this.postRepository.find();

    return { statusCode: 200, message: 'success', data: post } as TResult;
  }
}
