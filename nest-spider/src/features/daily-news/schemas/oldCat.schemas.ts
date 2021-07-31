import * as mongoose from 'mongoose';

export const CatOldSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});