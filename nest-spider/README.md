## 起服务

## 踩坑
### import 错误
在 vscode 中，import 语法会出现错误，因为 tsconfig.json 中的 "module": "commonjs"
将 eslint 中的   // project: 'tsconfig.json', 注释就可以了。

### 空大括号 eslint 报错
在 .vscode 中的 setting.json 中添加下面的这句
```json
 "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false
```

### 添加新的路由
给项目增加新的路由，在 app.module.ts 的 controllers 中增加需要添加的新路由，这一点和 angular 很相似。

```ts
import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './app.service';
import { CitysController } from './controller/citys/citys.controller'; // 新的路由

@Module({
  imports: [],
  controllers: [AppController, CitysController],
  providers: [AppService],
})
export class AppModule {}

```
### Delete `␍`eslint
强类型的这个 nest 好麻烦啊，到处是检测报错的地方，真的是麻烦的一批。
在 eslintrc.js 中直接将 prettie 的东西直接注释掉。只留下 eslint 的。

```js
 extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',  prettier 的错误麻烦的很，这里就直接注释了
  ],
```
暂时未知会不会有其他的错误，因为这个报错是关于 Linux 和 windows 的格式的，可能在服务器上可能会出现这个啥异常错误，这里先不管，做个备注吧。

### 新增加路由
删除了 app.controller 以后，再新增一个 tags 的 controller 发现一直是 404 。
