import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://bdnestjs:A@nderson301165@cluster0.luhcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
