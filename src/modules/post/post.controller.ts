import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BASE_API_URL } from 'src/common/constants';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';

@Controller(`${BASE_API_URL}/post`)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  list() {
    return this.postService.list();
  }

  @Post()
  create(@Body() payload: CreatePostDto) {
    return this.postService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: UpdatePostDto, @Param('id') id: number) {
    return this.postService.update(payload, id);
  }
}
