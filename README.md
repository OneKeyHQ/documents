# OneKey Document

这里储存着 OneKey 相关技术栈的文档

## 快速开始

```bash
yarn
yarn start
```

## 帮助翻译

目前需要对原有的英文文档进行翻译，以下几个命令与方法帮助你拥有更好的翻译体验

由于本地启动的 SPA 不支持 i18n 功能，我们可以用 `yarn start` 启动一个拥有 hot reload 的进程，再用 `yarn serve -p 3333` 指定其他端口来对比前后变化的效果

使用 `yarn start --locale zh-Hans` 开启中文版的 文档网站

使用 `yarn build && yarn serve -p 3333` 在端口 3333 开启一个静态编译的版本，这是一个支持 i18n 编译后的网站（由于不能使用 `yarn start -p 3333` 从另一端口开启采用的方案）

这样开启了两个不同 locale 的网站后可以清晰的进行对比，利用 hot reload 进行实时更改查看

对应的翻译文件拿当前的 `Connect Method List` 举例，在 `i18n/docusaurus-plugin-content/current/Onekey Connect/Method List` 里

原文件则在 `docs/Onekey Connect/Method List` 目录里，可以在编辑器里对比格式的变化

### 注意事项

- 可以使用 OneKey HW 对方法进行检测，部分方法暂未支持
  - 未支持的方法可在顶部写上 `（在 OneKey Pro 上支持）` 的提示，参考：

```markdown
i18n/zh-Hans/docusaurus-plugin-content-docs/current/Onekey Connect/Method List/binanceGetAddress.mdx

import Playground from "@src/components/playground";

（在 OneKey Pro 上支持）

## Binance：获取地址

用 [BIP44 路径](./path) 查询派生的地址，用户会在 OneKey 上弹出是否导出的权限提示。 ...
```
