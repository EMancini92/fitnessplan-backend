import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UtentiDocument = HydratedDocument<UtentiItem>;

@Schema()
export class UtentiItem {
  @Prop()
  Id: string;

  @Prop()
  Nome: string;

  @Prop()
  Cognome: string;

  @Prop()
  Email: string;

  @Prop()
  Tipo: string;
}

export const UtentiSchema = SchemaFactory.createForClass(UtentiItem);
