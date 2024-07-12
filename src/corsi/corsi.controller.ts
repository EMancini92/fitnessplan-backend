import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { CorsiService } from './corsi.service';
import { CorsiDto } from './dto/corsi.dto';
import { CorsiItem } from './schemas/corsi.shcema';

@Controller('corsi')
export class CorsiController {
  constructor(private readonly corsiService: CorsiService) {}

  @Post()
  async create(@Body() corsiDto: CorsiDto) {
    await this.corsiService.create(corsiDto);
  }

  @Get()
  async findAll(): Promise<CorsiItem[]> {
    return this.corsiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CorsiItem> {
    return this.corsiService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.corsiService.delete(id);
  }
}
