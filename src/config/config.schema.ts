import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  APP_ENV: Joi.string()
    .valid('development', 'production', 'test', 'local')
    .default('test'),
  DB_CONNECTION_STRING: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRE_IN: Joi.string().required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
  JWT_REFRESH_TOKEN_EXPIRE_IN: Joi.string().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET: Joi.string().required(),
  ZOHO_CLIENT_ID: Joi.string().required(),
  ZOHO_CLIENT_SECRET: Joi.string().required(),
  S3_ACCESS_KEY_ID: Joi.string().required(),
  S3_SECRET_ACCESS_KEY: Joi.string().required(),
  S3_BUCKET_NAME: Joi.string().required(),
  S3_REGION: Joi.string().required(),
  AWS_SES_ACCESS_KEY: Joi.string().required(),
  AWS_SES_SECRET_KEY: Joi.string().required(),
  AWS_SES_REGION: Joi.string().required(),
  AWS_SES_API_VERSION: Joi.string().required(),
  AWS_SES_FROM: Joi.string().required(),
  JWT_BIOMETRIC_TOKEN_SECRET: Joi.string().required(),
  JWT_BIOMETRIC_TOKEN_EXPIRE_IN: Joi.string().required(),
  FIREBASE_PROJECT_ID: Joi.string().required(),
  FIREBASE_PRIVATE_KEY: Joi.string().required(),
  FIREBASE_CLIENT_EMAIL: Joi.string().required(),
});
