---
sidebar_position: 3
---

# 定义应用程序的图标

当您的站点向 OneKey 浏览器插件的用户发出登录请求时，OneKey 浏览器插件会渲染显示您当前站点图标。

我们使用 CSS 选择器 `head > link[rel="shortcut icon"]` 来检索此图标，因此要为您的网站自定义此图标，只需确保遵循 [favicon 标准](https://en.wikipedia.org/wiki/Favicon)，并确保在您网站的 `head` 标签中包含一个带有 `rel=shortcut icon` 的 `link` 标签，如下所示：

```html
<head>
  <link rel="shortcut icon" href="https://your-site.com/your-icon.png" />
</head>
```

选中的 `link` 标签的 `href` 属性将用于在 OneKey 浏览器插件中渲染当前站点的图标。
