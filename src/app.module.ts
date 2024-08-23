import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configValidationSchema } from './config/config.schema';
import { ConfigModule } from './config/config.module';
import { DatabaseProvider } from './providers/database.provider';
@Module({
  imports: [ConfigModule.register({ isGlobal: true }), DatabaseProvider],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
