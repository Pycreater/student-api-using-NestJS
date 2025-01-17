import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
