import * as mongoose from 'mongoose';

export const DailyNewsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
