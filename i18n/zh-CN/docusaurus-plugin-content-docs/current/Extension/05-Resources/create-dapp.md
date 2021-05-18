---
sidebar_position: 1
---

＃创建一个简单的Dapp

::: tip提示
我们将构建此[app](https://metamask.github.io/test-dapp/)
:::

##项目设置

设置之前，请确保您已访问并阅读了我们的《入门指南》(./getting-started.html#getting-started)

确保您具有：

1.下载了[MetaMask扩展名](https://metamask.io/download.html)。
2. Node.js [下载并安装](https://nodejs.org/)
   3.从GitHub克隆/下载[Project Files](https://github.com/BboyAkers/simple-dapp-tutorial)。
   4.您最喜欢的文本编辑器或IDE已安装。我个人喜欢[Visual Studio Code](https://code.visualstudio.com/)

###打开项目文件夹

打开项目文件夹。导航到“开始”->“ index.html”，然后看一下说明第1部分的注释。在本教程的第一部分中，我们将使用/构建整个部分。

###安装依赖项

打开一个终端，并确保您的终端位于“ start/”文件夹的基本目录内。在文件夹内，文件应如下所示：

```
.
├─ index.html
├─ contract.js
├─ metamask.css
├─ package.json
└─ README.md
```

您将拥有更多文件，但这没什么好担心的！

打开您的终端并导航到开始文件夹。在此文件夹中运行：

```bash
npm install
```

这将安装我们项目所需的所有必需依赖项。这将创建一个`node_modules/`文件夹，其中存储了所有依赖项。

下一轮：

```bash
npm run serve
```

导航到http：//localhost：9011

##基本动作(第1部分)

现在，让我们导航到开始文件夹中的contract.js文件。

您的文件应如下所示。不用担心第1-31行。

```javascript
const forwarderOrigin = 'http://localhost:9010';

const initialize = () => {
  //You will start here
};
window.addEventListener('DOMContentLoaded', initialize);
```

如您在此处看到的，一旦DOM中的内容加载完毕，我们就会调用我们的initialize函数。现在，在我们开始编写任何代码之前，我们需要查看此应用程序第一部分的任务列表中的内容。

我们将在第一部分中介绍以下内容：

-[连接到MetaMask钱包](./create-dapp.html＃connecting-to-the-metamask-wallet)
-查看我们的eth_accounts结果
-显示我们的网络号码
-显示我们的ChainId
-显示我们的帐户

###连接到MetaMask钱包

我们在Dapp中需要做的第一件事是连接到MetaMask电子钱包。

1.我们需要创建一个函数来查看是否已安装MetaMask Chrome扩展
2.如果未安装MetaMask，我们：
   1.将我们的“ connectButton”更改为“单击此处以安装MetaMask”
   2.点击该按钮后，我们应该进入一个页面，该页面将允许我们安装扩展程序
   3.禁用按钮
3.如果安装了MetaMask，我们：
   1.将我们的“ connectButton”更改为“ Connect”
   2.单击该按钮时，它应该允许我们连接到我们的MetaMask钱包
   3.禁用按钮

让我们开始吧！

### MetaMask扩展检查

在我们的代码中，我们需要从index.html连接到我们的按钮

```javascript
const initialize = () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');
};
```

接下来，我们创建一个名为`isMetaMaskInstalled`的检查函数，以查看是否已安装MetaMask扩展

```javascript
const initialize = () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
};
```

接下来，我们需要创建一个“ MetaMaskClientCheck”函数，以查看是否需要根据是否已安装MetaMask Extension来更改按钮文本。
```javascript
const initialize = () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  //------Inserted Code------\\
  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      onboardButton.innerText = 'Click here to install MetaMask!';
    } else {
      //If it is installed we change our button text
      onboardButton.innerText = 'Connect';
    }
  };
  MetaMaskClientCheck();
  //------/Inserted Code------\\
};
```

### MetaMask“未安装” Dapp流

在未安装MetaMask的代码块中，我们要求用户“单击此处安装MetaMask！”，如果单击按钮，则需要进行以下操作：

1.将用户重定向到正确的页面以安装扩展程序
2.禁用按钮

```javascript
const MetaMaskClientCheck = () => {
  //Now we check to see if Metmask is installed
  if (!isMetaMaskInstalled()) {
    //If it isn't installed we ask the user to click to install it
    onboardButton.innerText = 'Click here to install MetaMask!';
    //When the button is clicked we call this function
    onboardButton.onclick = onClickInstall;
    //The button is now disabled
    onboardButton.disabled = false;
  } else {
    //If it is installed we change our button text
    onboardButton.innerText = 'Connect';
  }
};
MetaMaskClientCheck();
```

我们创建了一个函数，只要单击该按钮并将其禁用，就会调用该函数。 让我们深入研究`onClickInstall`函数并在其中创建逻辑。

::: tip提示
对于这一部分，我们将使用在执行npm安装时安装的'@ metamask/onboarding'库。 要了解更多信息，请访问[here](https://github.com/MetaMask/metamask-onboarding#metamask-onboarding)
:::
在此函数内，我们要：

1.将按钮的文本更改为“正在注册”
2.禁用按钮
3.开始入职流程

在您的“ MetaMaskClientCheck”函数上方，编写/插入此代码。

```javascript
//We create a new MetaMask onboarding object to use in our app
const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//This will start the onboarding proccess
const onClickInstall = () => {
  onboardButton.innerText = 'Onboarding in progress';
  onboardButton.disabled = true;
  //On this object we have startOnboarding which will start the onboarding process for our end user
  onboarding.startOnboarding();
};
```

伟大的！ 现在，如果最终用户没有MetaMask扩展，我们可以将其安装到哪里。 当他们刷新页面时，以太坊窗口对象将在那里，我们可以继续将其MetaMask钱包连接到我们的Dapp！

### MetaMask“已安装” Dapp流

接下来，我们需要重新访问`MetaMaskClientCheck`函数，并执行与“未安装MetaMask”块中相似的功能，直到现在我们的“已安装MetaMask”代码块。

```javascript
const MetaMaskClientCheck = () => {
  //Now we check to see if Metmask is installed
  if (!isMetaMaskInstalled()) {
    //If it isn't installed we ask the user to click to install it
    onboardButton.innerText = 'Click here to install MetaMask!';
    //When the button is clicked we call th is function
    onboardButton.onclick = onClickInstall;
    //The button is now disabled
    onboardButton.disabled = false;
  } else {
    //If MetaMask is installed we ask the user to connect to their wallet
    onboardButton.innerText = 'Connect';
    //When the button is clicked we call this function to connect the users MetaMask Wallet
    onboardButton.onclick = onClickConnect;
    //The button is now disabled
    onboardButton.disabled = false;
  }
};
MetaMaskClientCheck();
```

现在，我们创建了一个函数，只要单击按钮以触发与钱包的连接并禁用该按钮，就会调用该函数。 接下来，让我们进入`onClickConnect`函数并在其中构建逻辑。

在此函数内，我们要：

1.创建一个异步函数，该函数将尝试调用'eth_requestAccounts'RPC方法
2.捕获所有错误并将其记录到控制台

在您的onClickInstall函数下，编写/插入此代码。

```javascript
const onClickConnect = async () => {
  try {
    // Will open the MetaMask UI
    // You should disable this button while the request is pending!
    await ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error(error);
  }
};
```

伟大的！现在，一旦您单击按钮，MetaMask Extension就会弹出并连接您的钱包。

### 获取以太坊账户

之后，接下来我们要做的就是每当我们按下eth_accounts按钮时，我们想要获取以太坊账户并显示它。

```javascript
//Basic Actions Section
const onboardButton = document.getElementById('connectButton');
const getAccountsButton = document.getElementById('getAccounts');
const getAccountsResult = document.getElementById('getAccountsResult');
```

现在，我们已经抓到了eth_accounts按钮，并且要在其中显示它的段落字段，现在我们必须抓取数据。

在我们的“ MetaMaskClientCheck()”函数下，让我们编写/插入下面的代码。

```javascript
//Eth_Accounts-getAccountsButton
getAccountsButton.addEventListener('click', async () => {
  //we use eth_accounts because it returns a list of addresses owned by us.
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  //We take the first address in the array of addresses and display it
  getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';
});
```

恭喜！我们刚刚完成了基本动作功能的构建。现在进入下一步，显示我们的状态。
