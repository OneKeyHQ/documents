---
sidebar_position: 3
---

# 最佳实务

如果此页面未回答您的问题，请随时在[我们的存储库](https://github.com/MetaMask/metamask-mobile)中打开问题。

## 提供者(window.ethereum)

::: tip最近的重大提供商更改
如果您是以太坊应用程序开发人员，并且正在寻找有关我们2021年1月提供商API更改的信息，
有关更多详细信息，请参见我们的[迁移指南](./provider-migration.html)。
:::

对于MetaMask Mobile和桌面扩展，[provider API](./ethereum-provider.html)是相同的。
但是，提供者可以在页面生命周期的不同时间使用(即注入到页面中)。

### 提供程序可用性

如果您使用[`@ metamask/detect-provider`](https://npmjs.com/package/@metamask/detect-provider)，则无需担心。它将可靠地检测到移动提供商和扩展提供商。

如果您不使用`detect-provider`软件包，则必须手动检测移动提供商。

在您执行代码时，扩展提供程序将始终可用。
由于平台的限制，移动提供商可能要等到页面生命周期的后期才能注入。
为此，MetaMask提供程序在完全初始化后，在“窗口”上调度事件“ ethereum＃initialized”。

您可以使用以下代码段可靠地检测移动提供商和扩展提供商。

```javascript
if (window.ethereum) {
  handleEthereum();
} else {
  window.addEventListener('ethereum#initialized', handleEthereum, {
    once: true,
  });

  // If the event is not dispatched by the end of the timeout,
  // the user probably doesn't have MetaMask installed.
  setTimeout(handleEthereum, 3000); // 3 seconds
}

function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    // Access the decentralized web!
  } else {
    console.log('Please install MetaMask!');
  }
}
```

## 使用WalletConnect

通过WalletConnect，您可以在其他浏览器，桌面或移动应用程序上使用应用程序时，将MetaMask Mobile用作签名者。
查看[WalletConnect移动链接文档](https://docs.walletconnect.org/mobile-linking)了解更多信息。

## 深度链接

::: tip提示
[单击此处为您的应用程序创建深层链接。](https://metamask.github.io/metamask-deeplinks/#)
:::

深度链接可通过正确参数化的交易即时调用用户的首选钱包应用程序。

只有(经过身份验证的)用户可以确认交易，并且钱包可以是Web，移动或桌面应用程序。

嵌入在QR码中的URL，网页中的超链接，电子邮件或聊天消息可在松散耦合的应用程序之间实现强大的跨应用程序信令。

您可以对以下内容使用深层链接：

-创建一个URL，以便您的用户可以直接在MetaMask Mobile中打开您的应用程序，以使用其以太坊帐户与您的应用程序进行交互。

-提供一键式体验，使用户可以轻松地向另一个帐户付款(具有预先填写的参数，例如收件人地址，金额，网络等)

-让您的用户通过Connext付款渠道请求进行无气且即时的交易
-这要求用户选择使用InstaPay实验功能。

## 网站测试和调试

轻松在任何iOS或Android设备上使用MetaMask Mobile测试和调试您的web3网站。

### 测试

1.将开发服务器配置为在主机的本地IP地址“ 192.168.x.x”或“ 0.0.0.0”上运行。
2.确保测试设备使用与托管服务器的计算机相同的WiFi连接。
3.在MetaMask Mobile Web浏览器中，导航到位于http：//YOUR_LOCAL_IP：PORT的网站。

::: tip提示
如果您使用的是Android设备，则必须在网址中使用`xip`。范例：`http：//192.168.x.x.xip.io：8000`
:::

### 调试

:::警告重要
为了安全起见，如果该应用是通过Apple App Store或Google Play商店下载的，则无法在iOS和Android上进行Web浏览器调试。
您必须从[MetaMask Mobile存储库](https://github.com/MetaMask/metamask-mobile)在本地构建应用程序，然后在模拟器或物理设备上运行它。
:::

#### iOS

1.打开** Safari首选项**-> **高级**->启用**在菜单栏中显示开发菜单**复选框
2.在iOS模拟器或iOS设备中打开MetaMask Mobile
3.在Safari菜单栏中-> **开发**-> ** [设备名称] **-> ** [应用名称] **-> ** [URL-标题] **

::: tip提示
在物理设备上调试时，必须在设备的设置中启用Web Inspector：

**设置**-> ** Safari **-> **高级**-> ** Web检查器**
:::

＃＃＃＃ 安卓

1.在Android模拟器或Android设备中打开MetaMask Mobile
2.打开Goog​​le Chrome浏览器的DevTools->菜单(3点)-> **更多工具**-> **远程设备**
您也可以从Chrome浏览器访问“ chrome：//inspect”，以显示可用设备列表进行调试
3.在左侧选择您的设备，然后在要检查的浏览器内容上单击“检查”。

::: tip提示
在物理设备上调试时，必须在设备的设置中启用USB调试：

**设置**-> **系统**-> **关于手机**-> **开发人员选项**-> **启用USB调试**
:::

现在，您可以像在网络上一样调试MetaMask Mobile的浏览器内容！
