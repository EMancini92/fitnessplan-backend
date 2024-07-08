import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorsiController } from './corsi/corsi.controller';
import { CorsiService } from './corsi/corsi.service';
import { PrenotazioniController } from './prenotazioni/prenotazioni.controller';
import { PrenotazioniService } from './prenotazioni/prenotazioni.service';
import { PalestreController } from './palestre/palestre.controller';
import { PalestreService } from './palestre/palestre.service';
import { UtentiController } from './utenti/utenti.controller';
import { UtentiService } from './utenti/utenti.service';
import { CorsiItem, CorsiSchema } from './corsi/schemas/corsi.shcema';
import {
  PalestreItem,
  PalestreSchema,
} from './palestre/schema/palestre.schema';
import {
  PrenotazioniItem,
  PrenotazioniSchema,
} from './prenotazioni/schemas/prenotazioni.schema';
import { UtentiItem, UtentiSchema } from './utenti/schema/utenti.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fitnessplan'),
    MongooseModule.forFeature([{ name: CorsiItem.name, schema: CorsiSchema }]),
    MongooseModule.forFeature([
      { name: PalestreItem.name, schema: PalestreSchema },
    ]),
    MongooseModule.forFeature([
      { name: PrenotazioniItem.name, schema: PrenotazioniSchema },
    ]),
    MongooseModule.forFeature([
      { name: UtentiItem.name, schema: UtentiSchema },
    ]),
  ],
  controllers: [
    AppController,
    CorsiController,
    PrenotazioniController,
    PalestreController,
    UtentiController,
  ],
  providers: [
    AppService,
    CorsiService,
    PrenotazioniService,
    PalestreService,
    UtentiService,
  ],
})
export class AppModule {}
