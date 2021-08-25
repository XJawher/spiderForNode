import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ApiException } from "src/common/api.exception";
import { ApiCode } from "src/enums/api-code.enums";


/**
 * @description
 * @author lipc
 * @date 07/07/2021
 * @export the error has many different,
 * @class ValidationPipe
 * @implements {PipeTransform}
 */
@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform<T>(value: T, metadata: ArgumentMetadata): Promise<T> {
    const { metatype } = metadata;
    if (!metatype) return value

    const object = plainToClass(metatype, value)
    const errors = await validate(object);
    if (errors.length) {
      const { target, value, property, constraints } = errors[0];
      // 获取错误来源 class name，以后这里可以写一个 log 入口
      // 把错误请求的来源，path，接口，客户端信息，用户信息等等都可以存到数据库里。
      const className = target.constructor.name;
      const errorMsg = Object.values(constraints)[0]
      console.log(errorMsg);
      throw new ApiException(errorMsg, ApiCode.PARAMS_ERROR, 400)
    }

    return value;
  }
}