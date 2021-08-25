import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateCatDto {

  @IsString()
  readonly name: string;

  @IsNumber()
  @Min(6, { message: '年龄不能小于6' })
  @Max(70, { message: '年龄不能大于70' })
  readonly age: number;

  @IsString()
  readonly breed: string;
}
