import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CorsiItem } from './schemas/corsi.shcema';
import { Model } from 'mongoose';
import { CorsiDto } from './dto/corsi.dto';

@Injectable()
export class CorsiService {
  constructor(
    @InjectModel(CorsiItem.name) private readonly corsiModel: Model<CorsiItem>,
  ) {}

  async create(createCorso: CorsiDto): Promise<CorsiItem> {
    const createdCorso = await this.corsiModel.create(createCorso);
    return createdCorso;
  }

  async findAll(): Promise<CorsiItem[]> {
    return this.corsiModel.find().exec();
  }

  async findOne(id: string): Promise<CorsiItem> {
    return this.corsiModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCorso = await this.corsiModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedCorso;
  }
}
