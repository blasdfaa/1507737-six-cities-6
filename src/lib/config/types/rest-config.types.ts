import { Config } from './config.interface.js';

export type RestSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
}

export type RestAppConfig = Config<RestSchema>
