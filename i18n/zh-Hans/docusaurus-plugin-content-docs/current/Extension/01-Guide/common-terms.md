---
sidebar_position: 3
---

# 通用术语

## 单词很难

<p id ="agoctitecs_p">
  这是使用OneKey界面时可能遇到的术语的列表。
</p>

#### [您也可以用西班牙语阅读](https://github.com/faraggi/words-are-hard-es/blob/master/words-are-hard-es.md)，感谢[faraggi](https://github.com/faraggi)

---

### 钱包

<ul>
  <li id ="wallet_l1">您用来管理帐户的界面/客户端/包装器/所有者。</li>

  <li id ="wallet_l2">示例：OneKey.So，您的 OneKey 硬件钱包，Multisig钱包合同。</li>
</ul>

### 帐户

<ul>
  <li id ="account_l1">“持有"您的资金的公共和私人密钥对。</li>

  <li id ="account_l2">您的资金实际上存储在区块链上，而不是在钱包或帐户中。</li>

  <li id ="account_l3">就像您的Reddit帐户具有<code>用户名(公共)</code>和<code>密码(私有)</code>一样，以太坊帐户也是如此。为了提高安全性，您可以使用密码来加密私钥，这将导致该密码的<code>用户名(公用)</code>和<code>密码(私密)</code>和<code>密码(私有+更安全)</code>。请参阅<code>密钥库文件</code>部分。 </li>
</ul>

### 地址_(“公钥")_

<ul>
  <li id ="address_l1">您可以使用它来向帐户<b> </b>汇款。</li>
  <li id ="address_l2">有时也称为“公钥" </li>
  <li id ="address_l3">由<code> 0x </code> + <code> 40个十六进制字符</code>组成的字符串。</li>
  <li id ="address_l4">在以太坊中，地址以<code> 0x </code>开头。</li>
  <li id ="address_l5">示例：<code> 0x06A85356DCb5b307096726FB86A78c59D38e08ee </code> </li>
</ul>

### 公钥

<ul>
  <li id ="pubk_l1">在密码学中，您有一个密钥对：公钥和私钥。</li>
  <li id ="pubk_l2">您可以从私钥中获取公钥，但不能从公钥中获取私钥。</li>
  <li id ="pubk_l3">(高级)在以太坊中，地址的作用类似于公钥，但实际上并非公钥。</li>
  <li id ="pubk_l4">(高级)在以太坊中，公钥是从私钥派生的，并且是128个十六进制字符。然后，您将其的<code>"SHA3"(Keccak-256)</code>哈希值(64个字符)，最后40个字符并以<code> 0x </code>作为前缀，然后将42-字符地址。</li>
</ul>

### 私钥

<ul>
  <li id ="privk_1">您可以使用它从<b>从</b>一个帐户汇款。</li>
  <li id ="privk_2">您的地址/公钥的秘密一半。</li>
  <li id ="privk_3">由64个十六进制字符组成的字符串。</li>
  <li id ="privk_4">(<a href='https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid' target='_blank'>几乎</a>)每个包含64个十六进制字符的字符串都是一个私钥。</li>
  <li id ="privk_5">如果您今天和昨天用不同的方式手动键入私钥，您将访问其他钱包。切勿手动输入私钥。</li>
  <li id ="privk_6">这是您需要从帐户发送的字符串。没有它，您将无法使用您的资金。虽然，您无需以这种格式保存此原始的，未加密的私钥。您可以保存它的精美版本(例如，密钥库文件/助记词)。</li>
  <li id ="privk_7">示例：<code> afdfd9c3d2095ef696594f6cedcae59e72​​dcd697e2a7521b1578140422a4f890 </code> </li>
</ul>

### 密钥库文件

<ul>
  <li id ="keystoref_l1">
    JSON格式的私钥的加密版本(尽管它没有JSON扩展名)
  </li>
  <li id ="keystoref_l2">
    您的私钥的精美版本，受您选择的密码保护。
  </li>
  <li id ="keystoref_l3">
    与密码结合使用时，它具有私钥。
  </li>
  <li id ="keystoref_l4">
    比私钥安全，因为您需要密码。
  </li>
  <li id ="keystoref_l5">
    文件名通常采用<code> UTC </code> + <code>-</code> + <code> DATE_CREATED </code> + <code>-</code> + <code> YOUR_ADDRESS_WITHOUT_THE_OX </code> </li>
  <li id ="keystoref_l6">
    文件名示例：<code> UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee </code>
  </li>
  <li id ="keystoref_l7">
    内容示例：`...`
  </li>
  <li id ="keystoref_l8">
    (密码：<code> mypassword </code>)
  </li>
</ul>

### 助记词/种子短语/种子词

<ul>
  <li id ="mphrase_l1">
    您的私钥的另一个高级版本，实际上用于派生多个私钥。
  </li>
  <li id ="mphrase_l2">
    一个(通常)12或24个单词的短语，使您可以访问无限数量的帐户。
  </li>
  <li id ="mphrase_l3">
    由Ledger，TREZOR，OneKey，Jaxx等使用。
  </li>
  <li id ="mphrase_l4">
    源自<a href='https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki' target='_blank'> BIP 39规范</a>。
  </li>
  <li id ="mphrase_l5">
    您可以使用此短语访问的帐户由“路径"决定。
  </li>
  <li id ="mphrase_l6">
    示例12个单词：<code>大脑周围有掉电恐怖的身体反应，双发哑弹带来危险</code>
  </li>
  <li id ="mphrase_l7">
    示例24个单词：<code>卡片充填手势连接踢倒塌风扇本体盲引擎柠檬群地点称赞瘾君子经纪人不知道相等的豆歌唱治收入链接腿</code>
  </li>
</ul>

### 硬件钱包

<ul>
  <li id ="hardwarew_l1">
    通常，一个“持有"您的私钥以确保您的私钥安全的单用途设备。
  </li>
  <li id ="hardwarew_l2">
    通常，他们使用24字词短语。您应该写下这个短语(不在计算机上)，并与硬件钱包分开存储。
  </li>
  <li id ="hardwarew_l3">
    如果您丢失了硬件钱包，仍然可以通过写下的字词来访问帐户和资金。
  </li>
  <li id ="hardwarew_l4">
    切勿在计算机上键入词组。它违反了您的硬件钱包的目的。
  </li>
  <li id ="hardwarew_l5">
    <a href='https://kb.myetherwallet.com/en/hardware-wallets/' target='_blank'>有关硬件钱包的更多信息，请参见此处</a>
  </li>
</ul>

### Identicon /AddressIdenticon /AddressIcon

<ul>
  <li id ="addressIdent_l1">
    与您的地址相对应的彩色斑点。
  </li>
  <li id ="addressIdent_l2">
    这是查看您的地址是否正确的简单方法。
  </li>
  <li id ="addressIdent_l3">
    <a href='http://i.imgur.com/lHUrIiZ.jpg' target='_blank'>示例1 </a>
  </li>
  <li id ="addressIdent_l4">
    <a href='http://i.imgur.com/FvyLewS.jpg' target='_blank'>示例2 </a>
  </li>
  <li id ="addressIdent_l5">
    <em>注意：以上地址是单个字符，但具有明显不同的图标和颜色。魔术！</em>
  </li>
</ul>

### 十六进制

<ul>
  <li id ="hexadecimal_l">
    十六进制字符串由以太坊(Ethereum)各处使用，由数字<code> 0 1 2 3 4 5 6 7 8 9 </code>和<code> A B C D E F </code>组成。
  </li>
</ul>

### 种子

<ul>
  <li id ="seed_l1">
    为获得私钥而提供的输入。这应该始终以真正随机的方式生成，而不是由可怜的人脑组成的东西。
  </li>
  <li id ="seed_l2">
    如果选择了种子，则称为<code>大脑钱包</code>
  </li>
</ul>

### 大脑钱包

<ul>
  <li id ="bw_l1">
    根据您选择的种子或密码或密码生成的帐户。
  </li>
  <li id ="bw_l2">
    人类没有能力产生足够的熵，因此从这些短语中得出的钱包是不安全的。
  </li>
  <li id ="bw_l3">
    超快速计算机可能会强行破解大脑钱包。
  </li>
  <li id ="bw_l4">
    <a href='https://www.reddit.com/r/ethereum/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/' target='_blank'>脑钱包不安全。 </a>
  </li>
  <li id ="bw_l5">
    不要使用脑袋。
  </li>
</ul>

### 熵

<ul>
  <li id ="entropy_l1">
    也称为“随机性"。
  </li>
  <li id ="entropy_l2">
    事物越随机，它的熵就越大，它的安全性就越高。
  </li>
  <li id ="entropy_l3">
    通常用“熵的位数"定义，也可以用蛮力强制衍生出具有这么大熵的<b> \ _ \ _ \ _ \ _ </b>(例如私钥)花费的年数。
  </li>
  <li id ="entropy_l4">
    以太坊私钥是256位密钥
  </li>
  <li id ="entropy_l5">
    24词助记词短语也是256位熵。字典中有2048个单词。 11位熵(单词)。 <code> 11 * 24 = 264 </code>。最后一个字是校验和。
  </li>
</ul>

### 派生/派生

<ul>
  <li id ="deriveDeriv_l1">
    派生某物就是从原始来源获得它。
  </li>
  <li id ="deriveDeriv_l2">
    例如，如果我们要从私钥和密码派生密钥库，则意味着密钥库是从这两个来源创建的。
  </li>
  <li id ="deriveDeriv_l3">
    密钥库是两者的乘积，因此它是从两者派生的。
  </li>
</ul>

### 加密

<ul>
  <li id ="encryption_l1">
    加密是采取一串字母/数字(例如您的私钥)，然后通过私有翻译的方法将它们转换为另一串字母/数字的行为。
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
    未加密的私钥长度为64个字符，用于解锁或恢复钱包。
  </li>
  <li id ="encvunenc_l2">
    加密密钥的长度也为64个字母，并且是经过上述加密过程的常规私钥。
  </li>
  <li id ="encvunenc_l3">
    例如，如果世界"Apple"是您的缩短的私钥，那么它被加密为字母下方的三个字母，则新的缩短的加密密钥为"Dssoh"。由于您知道加密此密钥的方法，因此可以通过反转加密方法从中获得原始私钥。
  </li>
  <li id ="encvunenc_l4">
    通常，加密的私钥保存在扩展程序或加密设备中，并且不会被用户看到。这旨在增加另一层安全保护，以确保用户的钱包信息安全。
  </li>
</ul>

### 去中心化/去中心化

<ul>
  <li id ="decentralize_l">
    将单个实体(例如政府或大型公司)的权限转移到多个较小实体的过程。
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
    存储在区块链网络上的一段代码(或程序)。合同的条件由用户预先定义，如果满足所有条件，则合同(程序)将执行某些操作。
  </li>
</ul>

### 区块链

<ul>
  <li id ="blockchain_l">
    去中心化的公共分类帐。
  </li>
</ul>

<p id ="fixGlossary">
  我们非常欢迎您提供所有反馈，重写，说明，拼写错误和添加请求。 ？
</p>

<p>感谢<a href="https://support.mycrypto.com/getting-started/ethereum-glossary.html" target="_blank"> MyCrypto </a>作为此词汇表的起点</p>
