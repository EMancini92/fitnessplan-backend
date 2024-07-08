import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PrenotazioniDocument = HydratedDocument<PrenotazioniItem>;

@Schema()
export class PrenotazioniItem {
  @Prop()
  Nome: string;

  @Prop()
  Data_Prenotazione: string;

  @Prop()
  Prenotato_Da: string;

  @Prop()
  Corso: string;
}

export const PrenotazioniSchema =
  SchemaFactory.createForClass(PrenotazioniItem);
