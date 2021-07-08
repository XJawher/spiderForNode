import { HttpException, HttpStatus } from "@nestjs/common";
import { ApiCode } from "src/enums/api-code.enums";

/**
 * @description
 * @author lipc
 * @date 07/07/2021
 * @export in here we export a common error exception api.
 * @class ApiException
 * @extends {HttpException}
 */
export class ApiException extends HttpException {
  private errorMessage: string;
  private errorCode: ApiCode;

  constructor(
    errorMessage: string,
    errorCode: ApiCode,
    statusCode: HttpStatus,
  ) {
    super(errorMessage, statusCode);
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }

  getErrorCode(): ApiCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}