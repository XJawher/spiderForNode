import { Document } from "mongoose";

export interface DailyNewsInterface extends Document {
  readonly timestampString: string;
  readonly timestamp: number;
  titleHashContent: TitleHashContent[];
}

interface TitleHashContent {
  title: string;
  content?: string[];
}

interface Content {
  content: string;
}