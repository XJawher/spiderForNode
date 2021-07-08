import { Length, Min, Max, IsString, IsNumber } from "class-validator";

export class AppDto {

  @IsString()
  @Length(3, 64, { message: '错误参数 name ，name 长度范围是 3 - 64 字符' })
  readonly name: string;

  @IsNumber()
  @Max(35, { message: '错误参数 age ，age 搬砖年龄不能大于 35' })
  @Min(18, { message: '错误参数 age ，age 搬砖年龄不能小于 18' })
  readonly age: number;

  @IsNumber()
  @Max(7, { message: '错误参数 level ，level 本次招工需要 P5 到 P7 之间的熟练工人' })
  @Min(5, { message: '错误参数 level ，level 本次招工需要 P5 到 P7 之间的熟练工人' })
  readonly level: number;
}