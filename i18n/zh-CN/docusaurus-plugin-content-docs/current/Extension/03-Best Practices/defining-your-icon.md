---
sidebar_position: 3
---

＃定义应用程序的图标

当您的站点向MetaMask用户发出登录请求时，MetaMask可能会渲染显示您站点图标的模式。

我们使用HTML选择器`<head> link [rel =“ shortcut icon”]`检索此图标，因此要为您的网站自定义此图标，只需确保遵循[favicon标准](https：//en.wikipedia.org/wiki/Favicon)，并确保在您网站的“ head”中包含一个带有“ rel =“ shortcut icon””的“ link”标签，如下所示。

标签的“ href”属性将用于分配站点图标。

```html
<head>
  <link rel="shortcut icon" href="https://your-site.com/your-icon.png" />
</head>
```
