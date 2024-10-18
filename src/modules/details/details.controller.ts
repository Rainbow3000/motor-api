import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BASE_API_URL } from 'src/common/constants';
import { DetailsService } from './details.service';
import { CreateDetailsDto, UpdateDetailsDto } from './details.dto';

@Controller(`${BASE_API_URL}/details`)
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Post()
  create(@Body() payload: CreateDetailsDto) {
    return this.detailsService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: UpdateDetailsDto, @Param('id') id: number) {
    return this.detailsService.update(payload, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.detailsService.delete(id);
  }

  @Get()
  list() {
    return this.detailsService.list();
  }

  @Get(':id')
  single(@Param('id') id: number) {
    return this.detailsService.single(id);
  }

  @Get('by-product/:id')
  singleByProduct(@Param('id') id: number) {
    return this.detailsService.singleByProduct(id);
  }
}
