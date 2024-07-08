import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CorsiDocument = HydratedDocument<CorsiItem>;

@Schema()
export class CorsiItem {
  @Prop()
  Nome: string;

  @Prop()
  Data_Inizio: string;

  @Prop()
  Data_Fine: string;

  @Prop()
  Istruttore: string;

  @Prop()
  Palestra: string;
}

export const CorsiSchema = SchemaFactory.createForClass(CorsiItem);
