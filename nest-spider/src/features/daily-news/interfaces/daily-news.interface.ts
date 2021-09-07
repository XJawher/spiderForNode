import { Document } from "mongoose";

export interface DailyNewsInterface extends Document {
  readonly timestampString: string;
  readonly timestamp: number;
  titleHashContent: TitleHashContent[];
}

interface TitleHashContent {
  title: string;
  content?: string[];

  tags?: Tags[];

  startTime?: number;

  endTime?: number;
  // commit 是一个灵活处理的标签，当有一些特殊需要补充的地方的时候，就进行特殊的补充
  commit?: any
}

interface Tags {
  // 类型有 名称 name，公司 company，城市 city
  type?: string;
  value?: string;
}