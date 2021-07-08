import { Length, Min, Max, IsString, IsNumber } from "class-validator";

export class AppDto {

  @IsString()
  readonly name: string;

  @IsNumber()
  @Max(35, { message: '搬砖年龄不能大于 35' })
  @Min(18, { message: '搬砖年龄不能小于 18' })
  readonly age: number;

  @IsNumber()
  @Length(5, 7, { message: '本次招工需要 P5 到 P7 之间的熟练工人' })
  readonly level?: string;
}