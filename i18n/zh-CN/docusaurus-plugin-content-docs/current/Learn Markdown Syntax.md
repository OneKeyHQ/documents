---
id: syntax
title: Learn MDX Syntax
sidebar_label: Learn MDX Syntax
---

您可以使用[GitHub风格的Markdown语法]（https://github.github.com/gfm/）编写内容。

## Markdown语法

在设计基于markdown的Docusaurus网站时用作示例页面。

##标头

＃H1-创建最佳文档

## H2-创建最佳文档

### H3-创建最佳文档

#### H4-创建最佳文档

##### H5-创建最佳文档

###### H6-创建最佳文档

---

＃＃ 重点

强调，又称斜体，带有_asterisks_或_underscores_。

重点强调，又名黑体字，带有星号**或下划线**。

结合强调与**星号和_underscores _ **。

删除线使用两个波浪号。 ~~抓这个~~

---

##列表

1.第一个订购清单项目
1.另一个项目

-无序子列表。

1.实际数字无关紧要，只不过是一个数字
1.订购子清单
1.还有另一项。

-无序列表可以使用星号

*或缺点

-或加号

---

##链接

[我是内联样式的链接]（https://www.google.com/）

[我是带有标题的内联样式链接]（https://www.google.com/“ Google的主页”）

[我是参考样式的链接] [不区分大小写的任意参考文字]

[您可以将数字用于引用样式的链接定义] [1]

或将其保留为空，然后使用[链接文本本身]。

URL和尖括号中的URL将自动变为链接。 http://www.example.com/或<http://www.example.com/>，有时甚至是example.com（例如，不在GitHub上）。

一些文本表明参考链接可以在以后使用。

[不区分大小写的任意参考文字]：https://www.mozilla.org/
[1]：http：//slashdot.org/
[链接文本本身]：http://www.reddit.com/

---

＃＃ 图片

这是我们的徽标（悬停以查看标题文本）：

内联样式：！[替代文字]（https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png'徽标标题文字1'）

参考样式：！[替代文字] [徽标]

[徽标]：https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png'徽标标题文本2'

通过提供文件路径，可以使用任何文件夹中的图像。路径应相对于原始markdown文件，或相对于“ / static”文件夹。

！[img]（/ img / logo.svg）

---

＃＃ 代码

javascript
var s ='JavaScript语法高亮显示';
警报；
```python
s = "Python语法高亮显示"
print(s)
```

```
未指定语言，因此未突出显示语法。
但是，让我们放入一个<b>标签</ b>。
```

```js {2}
function HighlightMe() {
  console.log('此行可以突出显示！');
}
```

---

##表

冒号可用于对齐列。

|桌子|是|酷
| ------------- | ：-----------：| -----：|
|第3栏是|右对齐| \ $ 1600 |
|第2列是|居中| \ $ 12 |
|斑马条纹|整洁| \ $ 1 |

每个标头单元格必须至少有3个破折号。外管（|）是可选的，您无需使原始Markdown排列整齐。您还可以使用内联Markdown。

|降价|少|漂亮
| -------- | --------- | ---------- |
| _Still_ | `renders` | **很好** |
| 1 | 2 | 3 |

---

##块引用

>块引用在电子邮件中非常方便，可以模拟回复文本。该行是同一报价的一部分。

报价中断。

>这是一条很长的行，当它换行时仍会被正确引用。哦，男孩，让我们继续写作，以确保它足够长，可以实际包裹所有人。哦，您可以将Markdown放到blockquote中。

---

##内联HTML

<dl>
  <dt>定义列表</ dt>
  <dd>是人们有时使用的东西。</ dd>

  <dt> HTML中的降价</ dt>
  <dd> *不能*很好地工作。使用HTML <em>标签</ em>。</ dd>
</ dl>

---

##换行符

这是我们要开始的一行。

该行与上面的行之间有两个换行符，因此它将是一个“ _separate paragraph_”。

该行也是一个单独的段落，但是...此行仅由一个换行符分隔，因此它是_same段落_中的一个单独的行。

---

##告诫

：：：笔记

这是一个音符

:::

：：：小费

这是一个提示

:::

：：：重要的

这个很重要

:::

：：：警告

这是一个警告

:::

：：：警告

这是一个警告

:::
