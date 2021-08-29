import * as mongoose from 'mongoose';

export const DailyNewsSchema = new mongoose.Schema({
  timestampString: String,
  timestamp: Number,
  titleHashContent: [{}],
});