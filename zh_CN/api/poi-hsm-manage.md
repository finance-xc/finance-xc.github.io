# POIHsmManage

## 开始

金融行业对数据安全的要求很高，因此密钥在金融交易中是不可缺少的部分。熟悉金融设备中的密钥体系和 `PCI` 相关的知识对开发一款安全的支付类应用非常重要，可以更好的保护用户和持卡人的敏感数据，以免造成数据泄露甚至经济损失。

::: tip
PCI 认证指的是 `P`ayment `C`ard `I`ndustry Data Security Standard (支付卡行业数据安全标准) 的认证
:::


## 密钥体系

### MK/SK

这是常用的分级密钥体系，一般分为主密钥和工作密钥。主密钥用来保护工作密钥，工作密钥用来保护交易数据或其他敏感数据。

::: tip
* 主密钥 MK = `M`aster `K`ey
* 工作密钥 SK = `S`ession `K`ey
:::

支付行业常见的密钥类型有
* TMK - `T`erminal `M`aster `K`ey 终端主密钥
* TPK - `T`erminal `P`in Encryption `K`ey 终端 PIN 密钥
* TAK - `T`erminal Message `A`uthentication Code `K`ey 终端 MAC 密钥
* TEK - `T`erminal Data `E`ncryption `K`ey 终端数据加密密钥
* TDK - `T`erminal Data `D`ecryption `K`ey 终端数据解密密钥


### DUKPT

在 DUKPT 之前，MK/SK 广泛使用，但是会有个问题，不同的终端使用不同的 MK 的话，当要布放的终端数量比较庞大时，收单行就得维护大量的 MK。DUKPT 就解决了这个问题，因为所有的 key 可以从 BDK 衍生，所以只需维护一个 BDK 就行。

::: tip
* DUKPT = `D`erived `U`nique `K`ey `P`er `T`ransaction
:::

## 加解密算法

### 非对称加密
非对称加密，也称为公钥加密，使用一对密钥：一个公钥和一个私钥。公钥可以公开分享，用于加密数据；私钥必须保密，用于解密数据。
由于加密和解密使用不同的密钥，即使公钥被公开，没有私钥也无法解密数据，这提高了安全性。
公钥可以公开，而私钥必须保密，这简化了密钥的分发过程。
非对称加密算法通常比对称加密算法慢，因此它们通常用于加密小块数据，如对称加密的密钥。

常见的非对称加密算法：
* RSA

### 对称加密
对称加密是一种加密方法，其中加密和解密使用相同的密钥。这意味着发送方和接收方都必须拥有这个密钥才能进行加密和解密操作。
对称加密算法通常比非对称加密算法快，适合大量数据的加密。
由于加密和解密使用相同的密钥，密钥的分发和管理成为一个挑战，因为必须确保密钥的安全，防止被未授权的人获取。

常见的对称加密算法：
* AES（高级加密标准）
* DES（数据加密标准）
* 3DES（三重数据加密算法），也写做 TDES

## :tada: 接口

### PedWriteKey

写入主密钥或工作密钥

```java
**
* Write MK/SK Key.
*
* @param keyInfo Key Information. {@link PedKeyInfo}
* @param kcvInfo Key Check Value Information. {@link PedKcvInfo}
*
* @return Key Write Result. 0 : Write Successful, Other : Error Code.
*/
public int PedWriteKey(PedKeyInfo keyInfo, PedKcvInfo kcvInfo)
```



:::tip
写入密钥需要注意以下几个关键字段：
* 源密钥类型；如：PED_TLK, PED_TMK
* 源密钥索引；用于解密目标密钥的密钥索引 (索引为 0 时，目标秘钥是明文)
* 目标密钥类型；待写入密钥的类型 （TLK 可以是明文写入）
* 目标密钥索引；待写入密钥的位置

密钥索引：后续对 PIN 和数据的加密都使用索引。对于各种类型的密钥可能同时支持 1 组或多组密钥，如：
- TLK - 只支持 1 组，其索引范围是[1,1]
- TMK - 支持 64 组，其索引范围是[1, 64]
- TPK - 支持 64 组，其索引范围是[1, 64]
- TAK - 支持 64 组，其索引范围是[1, 64]
- TDK - 支持 64 组，其索引范围是[1, 64]
- TEK - 支持 64 组，其索引范围是[1, 64]
- TTK - 支持 64 组，其索引范围是[1, 64]
- TIK - 支持 10 组，其索引范围是[1, 10]
- TRK - 支持 1 组，其索引范围是[1]
:::


* 写入明文密钥 TLK 
```java
writeKey(POIHsmManage.PED_TLK, 0, POIHsmManage.PED_TLK, 1, HexUtil.parseHex("123456789b03b593df1c9173bf530b6319a9ac062b03b593"), HexUtil.parseHex("03AD57FE"), "AD57FE");
```

* 写入主密钥
```java
writeKey(POIHsmManage.PED_TLK, 1, POIHsmManage.PED_TMK, 1, HexUtil.parseHex("b771184f405f57c48e4160fa13c024f014f3e027d2e24fb1"), HexUtil.parseHex("033398C9"), "3398C9");

```

* 写入工作密钥
```java
writeKey(POIHsmManage.PED_TMK, 1, POIHsmManage.PED_TPK, 1, HexUtil.parseHex("f226f3faebda563a00d6c290c7f235310a5b81517ba0307e"), HexUtil.parseHex("03137AD6"), "137AD6");
writeKey(POIHsmManage.PED_TMK, 1, POIHsmManage.PED_TAK, 2, HexUtil.parseHex("a3117f749d954abaa1331b8f65e9bbaf86426292af4d7019"), HexUtil.parseHex("033864E3"), "3864E3");
writeKey(POIHsmManage.PED_TMK, 1, POIHsmManage.PED_TEK, 4, HexUtil.parseHex("4373e6cbd14b983148ef14122520be565331d0549625604a"), HexUtil.parseHex("035D1E30"), "5D1E30");
```
:::tip
上面为了方便简洁说明流程，封装了一个方法
```java
private int writeKey(int srcKeyType, int srcKeyIndex, int dstKeyType, int dstKeyIndex, int dstAlgorithm, byte[] keyData, byte[] kcv) {
    PedKeyInfo keyInfo = new PedKeyInfo();
    PedKcvInfo kcvInfo = new PedKcvInfo();

    keyInfo.srcKeyType = srcKeyType;
    keyInfo.srcKeyIdx = srcKeyIndex;
    keyInfo.dstKeyType = dstKeyType;
    keyInfo.dstKeyIdx = dstKeyIndex;
    keyInfo.dstAlgorithm = dstAlgorithm;
    keyInfo.dstKeyData = keyData;
    keyInfo.dstKeyLen = keyData.length;

    kcvInfo.checkMode = 1;
    kcvInfo.checkBuf = kcv;

    return POIHsmManage.getDefault().PedWriteKey(keyInfo, kcvInfo);
}
```
:::

