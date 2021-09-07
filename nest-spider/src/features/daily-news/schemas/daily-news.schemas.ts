import * as mongoose from 'mongoose';

import { DailyNewsInterface } from "../interfaces/daily-news.interface";

import { CreateDailyNewsDto } from "../dto/daily-news.dto"


export const DailyNewsSchema = new mongoose.Schema<DailyNewsInterface>(() => CreateDailyNewsDto);