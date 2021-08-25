import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
/**
 * @description
 * @author lipc
 * @date 18/08/2021
 * @export
 * @class DatabaseModule
 * 这里将集合数据的操作
 * 增删改查
 * 创建表
 * 获取用户
 * 权限
 * 待续
 */
@Module({
  exports: [...databaseProviders],
  providers: [...databaseProviders],
})
export class DatabaseModule {}