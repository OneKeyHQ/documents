---
sidebar_position: 3
---

# 通用术语

<p id ="agoctitecs_p">
  这是使用 OneKey 浏览器插件界面时可能遇到的术语的列表。
</p>

---

### 钱包

<ul>
  <li id ="wallet_l1">您用来管理帐户的界面 / 客户端 / 网页等。</li>

  <li id ="wallet_l2">示例：OneKey 硬件钱包，OneKey APP，<a href="https://desktop.onekey.so/">OneKey Desktop</a> 等</li>
</ul>

### 帐户

<ul>
  <li id ="account_l1">「持有」您的资金的公共和私有密钥对。</li>

  <li id ="account_l2">您的资金实际上存储在区块链上，而不是在钱包或帐户中。</li>

  <li id ="account_l3">就像您的微博帐户具有<code>用户名（公共）</code>和<code>密码（私有）</code>一样，以太坊帐户也是如此。为了提高安全性，您可以使用密语（passphrase）来加密私钥，这样<code>用户名（公用）</code>和<code>密码（私密）</code>和<code>密语（私有+更安全）</code>的搭配会更加安全。请参阅<code>密钥库文件</code>部分。 </li>
</ul>

### 地址（公钥）

<ul>
  <li id ="address_l1">您可以使用它来向帐户<b>地址</b>汇款。</li>
  <li id ="address_l2">有时也称为「公钥」 </li>
  <li id ="address_l3">由<code> 0x </code> + <code> 40个十六进制字符</code>组成的字符串。</li>
  <li id ="address_l4">在以太坊中，地址以<code> 0x </code>开头。</li>
  <li id ="address_l5">示例：<code> 0x06A85356DCb5b307096726FB86A78c59D38e08ee </code> </li>
</ul>

### 公钥

<ul>
  <li id ="pubk_l1">在密码学中，您有一个密钥对：公钥和私钥。</li>
  <li id ="pubk_l2">您可以从私钥中获取公钥，但不能从公钥中获取私钥。</li>
  <li id ="pubk_l3">（高级）在以太坊中，地址的作用类似于公钥，但实际上并非公钥。</li>
  <li id ="pubk_l4">（高级）在以太坊中，公钥是从私钥派生的，并且是 128 个十六进制字符。然后，您将其的<code>"SHA3"(Keccak-256)</code>哈希值（64 个字符），最后 40 个字符并以<code> 0x </code>作为前缀，然后将展示为字符地址。</li>
</ul>

### 私钥

<ul>
  <li id ="privk_1">您可以使用它从<b>从</b>一个帐户汇款。</li>
  <li id ="privk_3">由 64 个十六进制字符组成的字符串。</li>
  <li id ="privk_4">（<a href='https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid' target='_blank'>几乎</a>）每个包含 64 个十六进制字符的字符串都是一个私钥。</li>
  <li id ="privk_5">如果您两次输入用不同的内容手动键入私钥，您将访问其他钱包，尽量避免手动输入私钥。</li>
  <li id ="privk_6">这是您需要从帐户发送的字符串。没有它，您将无法使用您的资金。虽然，您无需以这种格式保存此原始的未加密的私钥。您可以保存它的处理版本（例如：密钥库文件 / 助记词）。</li>
  <li id ="privk_7">示例：<code> afdfd9c3d2095ef696594f6cedcae59e72​​dcd697e2a7521b1578140422a4f890 </code> </li>
</ul>

### 密钥库文件

<ul>
  <li id ="keystoref_l1">
    JSON 格式的私钥的加密版本（尽管它没有 JSON 扩展名）
  </li>
  <li id ="keystoref_l2">
    您的私钥的处理后版本，受您选择的密码保护。
  </li>
  <li id ="keystoref_l3">
    与密码结合使用时，它具有私钥的特性。
  </li>
  <li id ="keystoref_l4">
    比私钥安全，因为您需要密码才能够使用它。
  </li>
  <li id ="keystoref_l5">
    文件名通常采用<code> UTC </code> + <code>-</code> + <code> DATE_CREATED </code> + <code>-</code> + <code> YOUR_ADDRESS_WITHOUT_THE_OX </code> </li>
  <li id ="keystoref_l6">
    文件名示例：<code> UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee </code>
  </li>
</ul>

### 助记词 / 种子短语 / 种子词

<ul>
  <li id ="mphrase_l1">
    您的私钥的另一个高级版本，实际上用于派生多个私钥。
  </li>
  <li id ="mphrase_l2">
    一个（通常）12 或 24 个单词的短语，使您可以访问无限数量的帐户。
  </li>
  <li id ="mphrase_l3">
    由大多数浏览器插件和钱包来使用。
  </li>
  <li id ="mphrase_l4">
    源自 <a href='https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki' target='_blank'> BIP 39 规范</a>。
  </li>
  <li id ="mphrase_l5">
    您可以手动指定派生路径。
  </li>
</ul>

### 硬件钱包

<ul>
  <li id ="hardwarew_l1">
    通常，一个「持有」您的私钥以确保您的私钥安全的单用途硬件设备。
  </li>
  <li id ="hardwarew_l2">
    通常，他们使用 24 字词短语，您应该写下这些助记词而不是保留在计算机当中，并与硬件钱包分开存储。
  </li>
  <li id ="hardwarew_l3">
    如果您丢失了硬件钱包，仍然可以通过写下的助记词来访问帐户和资金。
  </li>
  <li id ="hardwarew_l4">
    切勿在计算机上键入词组。它违反了您的硬件钱包的目的。
  </li>
  <li id ="hardwarew_l5">
    <a href='https://kb.myetherwallet.com/en/hardware-wallets/' target='_blank'>有关硬件钱包的更多信息，请参见此处</a>
  </li>
</ul>

### 十六进制

<ul>
  <li id ="hexadecimal_l">
    十六进制字符串由以太坊（Ethereum）各处使用，由数字<code> 0 1 2 3 4 5 6 7 8 9 </code>和<code> A B C D E F </code>组成。
  </li>
</ul>


### 熵

<ul>
  <li id ="entropy_l1">
    也称为「随机性」。
  </li>
  <li id ="entropy_l2">
    事物越随机，它的熵就越大，它的安全性就越高。
  </li>
  <li id ="entropy_l3">
    通常用「熵的位数」定义，也可以用蛮力强制衍生出具有这么大熵的（例如私钥）花费的年数。
  </li>
  <li id ="entropy_l4">
    以太坊私钥是 256 位密钥
  </li>
  <li id ="entropy_l5">
    24 位助记词短语也是 256 位熵，字典中有 2048 个单词，11 位熵（单词），<code> 11 * 24 = 264 </code>，最后一个字是校验和。
  </li>
</ul>

### 派生

<ul>
  <li id ="deriveDeriv_l1">
    派生某物就是从原始来源获得它。
  </li>
  <li id ="deriveDeriv_l2">
    例如，如果我们要从私钥和密码派生密钥库，则意味着密钥库是从这两个来源创建的。
  </li>
  <li id ="deriveDeriv_l3">
    密钥库是两者共同作用产生的，因此它是从两者派生的。
  </li>
</ul>

### 加密

<ul>
  <li id ="encryption_l1">
    加密是采取一串字母 / 数字（例如您的私钥），然后通过私有翻译的方法将它们转换为另一串字母 / 数字的行为。
  </li>
  <li id ="encryption_l2">
    有多种不同的加密方法。
  </li>
  <li id ="encryption_l3">
    加密为那些试图窃取您的信息的人提供了保护！
  </li>
</ul>

### 加密密钥与未加密密钥

<ul>
  <li id ="encvunenc_l1">
    未加密的私钥长度为 64 个字符，用于解锁或恢复钱包。
  </li>
  <li id ="encvunenc_l2">
    加密密钥的长度也为 64 个字母，并且是经过上述加密过程的常规私钥。
  </li>
  <li id ="encvunenc_l3">
    例如，如果「Apple」是您的缩短的私钥，如果我们对他进行加密，每个字母按照字母表顺序向后平移三位，则新的缩短的加密密钥为「Dssoh」。由于您知道加密此密钥的方法，因此可以通过反转加密方法从中获得原始私钥。
  </li>
  <li id ="encvunenc_l4">
    通常，加密的私钥保存在扩展程序或加密设备中，并且不会被用户看到。这旨在增加另一层安全保护，以确保用户的钱包信息安全。
  </li>
</ul>

### 去中心化

<ul>
  <li id ="decentralize_l">
    将单个实体（例如政府或大型公司）的权限转移到多个较小实体的过程。
  </li>
</ul>

### 不信任

<ul>
  <li id ="trustless_l">
    区块链负责的分布式无信任共识。由于每个人都有曾经执行过的所有交易的分类帐的副本，因此不需要第三方。您可以自己验证交易，但是创建了以太坊区块链和比特币区块链以确保当满足所有条件时各方之间执行规则和协议。
  </li>
</ul>

### 智能合约

<ul>
  <li id ="sc_l">
    存储在区块链网络上的一段代码（或程序）。合约的条件由用户预先定义，如果满足所有条件，则合约（程序）将执行某些操作。
  </li>
</ul>

### 区块链

<ul>
  <li id ="blockchain_l">
    去中心化的公共分类帐本。
  </li>
</ul>

<p>感谢<a href="https://support.mycrypto.com/getting-started/ethereum-glossary.html" target="_blank"> MyCrypto </a>作为此词汇表的起点，我们对内容有删改和处理</p>
