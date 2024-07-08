import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PalestreDocument = HydratedDocument<PalestreItem>;

@Schema()
export class PalestreItem {
  @Prop()
  Nome: string;

  @Prop()
  Location: string;
}

export const PalestreSchema = SchemaFactory.createForClass(PalestreItem);
