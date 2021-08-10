---
sidebar_position: 4
---

# 入职图书馆

作为支持以太坊的站点开发人员，让用户离开现场安装OneKey带来了挑战。最值得注意的是，您必须在安装后通知用户返回您的站点并刷新其浏览器。您的站点只有在刷新后才能检测到用户的新安装的OneKey扩展。 OneKey的我们深切关注用户体验，并且我们知道需要改进此工作流程。

OneKey现在提供了一个[metamask-onboarding库](https://github.com/OneKey/metamask-onboarding)，旨在改善和简化入门体验。新的库公开了一个API，以启动入职过程。在此过程中，它将您的站点注册为入职请求的来源。用户完成入职流程后，OneKey将检查此来源。如果找到原点，则OneKey入职流程的最终确认按钮将指示该用户将被重定向回您的站点。

## 入门

1. 使用npm或yarn安装@ metamask/onboarding。
2. 导入Onboarding库或将其包含在您的页面中。

```javascript
// As an ES6 module
import OneKeyOnboarding from '@onekey/onboarding';
// Or as an ES5 module
const OneKeyOnboarding = require('@onekey/onboarding');
```

If you'd prefer you can instead include the prebuilt ES5 bundle that ships with the library:

```html
<script src="./metamask-onboarding.bundle.js"></script>
```

3. Create a new instance of the Onboarding library

```javascript
const onboarding = new OneKeyOnboarding();
```

4. Start the onboarding process in response to a user event (e.g. a button click).

```javascript
onboarding.startOnboarding();
```

## Examples

### Basic Usage

```javascript
const onboarding = new OneKeyOnboarding();
onboarding.startOnboarding();
```

### Using React

```jsx
import OneKeyOnboarding from '@onekey/onboarding';
import React from 'react';

const ONBOARD_TEXT = 'Click here to install OneKey!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

export function OnboardingButton() {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new OneKeyOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (OneKeyOnboarding.isOneKeyInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (OneKeyOnboarding.isOneKeyInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.off('accountsChanged', handleNewAccounts);
      };
    }
  }, []);

  const onClick = () => {
    if (OneKeyOnboarding.isOneKeyInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}
```

### Using TypeScript

We ship our TypeScript types with `@onekey/onboarding`. Modifying the above example to get type safety when using the onboarding library is simple:

```jsx
  -const onboarding = React.useRef();
  +const onboarding = React.useRef<OneKeyOnboarding>();
```

Doing this step will give you editor auto-completion for the methods exposed by the library, and helpful documentation.

![Editor Highlighting](https://user-images.githubusercontent.com/4448075/85584481-ccc7ec00-b604-11ea-9b74-49c76ee0bf22.png)

### Using Vanilla Javascript + HTML

```html
<!DOCTYPE html>
<html lang="en-CA">
  <head>
    <title>OneKey Onboarding Example</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Sample Dapp</h1>
    <button id="onboard">Loading...</button>
    <script src="./metamask-onboarding.bundle.js"></script>
    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const onboarding = new OneKeyOnboarding();
        const onboardButton = document.getElementById('onboard');
        let accounts;

        const updateButton = () => {
          if (!OneKeyOnboarding.isOneKeyInstalled()) {
            onboardButton.innerText = 'Click here to install OneKey!';
            onboardButton.onclick = () => {
              onboardButton.innerText = 'Onboarding in progress';
              onboardButton.disabled = true;
              onboarding.startOnboarding();
            };
          } else if (accounts && accounts.length > 0) {
            onboardButton.innerText = 'Connected';
            onboardButton.disabled = true;
            onboarding.stopOnboarding();
          } else {
            onboardButton.innerText = 'Connect';
            onboardButton.onclick = async () => {
              await window.ethereum.request({
                method: 'eth_requestAccounts',
              });
            };
          }
        };

        updateButton();
        if (OneKeyOnboarding.isOneKeyInstalled()) {
          window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            updateButton();
          });
        }
      });
    </script>
  </body>
</html>
```

## Onboarding Diagram

Here is a diagram of the interactions between the onboarding library, the forwarder, and the extension:

![Onboarding Library Diagram](https://user-images.githubusercontent.com/2459287/67541693-439c9600-f6c0-11e9-93f8-112a8941384a.png)
