import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { configValidationSchema } from 'src/config/config.schema';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    const filePath = `${process.env.NODE_ENV || '.env'}.development`;
    const envFile = path.resolve(__dirname, '../../', filePath);
    const config = dotenv.parse(fs.readFileSync(envFile));
    const { error, value } = configValidationSchema.validate(config, {
      allowUnknown: true,
      abortEarly: false,
    });

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    this.envConfig = config;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
