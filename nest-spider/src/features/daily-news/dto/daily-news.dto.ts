import { IsNumber, IsString, } from "class-validator";



/**
 * @description
 * @author lipc
 * @date 27/08/2021
 * @export
 * @class CreateDailyNewsDto
 */
export class CreateDailyNewsDto {

  // 时间戳，新闻发生的日期 时间戳
  @IsNumber()
  readonly timestamp?: number;

  // 时间戳，新闻发生的日期 tring 例如 2020-08-27
  @IsString()
  readonly timestampString?: string;

  titleHashContent: TitleHashContent[];
}


class TitleHashContent {

  // 标题，每天新闻的标题
  @IsString()
  title: string;

  // 上面标题对应的内容，可能为空
  content?: Content[];
}

class Content {

  @IsString()
  content: string;
}