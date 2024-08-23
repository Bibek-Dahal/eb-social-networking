import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbPass = encodeURIComponent(configService.get('DB_PASS'));

        return {
          uri: `mongodb+srv://bibek:${dbPass}@cluster0.ruptepi.mongodb.net/graphql?retryWrites=true&w=majority&appName=Cluster0`,
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseProvider {}
