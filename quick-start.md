# Quick Start



## SDK 简介

祥承 POS SDK 是一套基于祥承研发设备的金融相关功能应用程序接口。您可以使用该套 SDK 开发适用于 Android 系统（基于祥承研发设备）的交易应用，通过调用 POS SDK 接口，您可以轻松启动交易，进行加解密数据，构建功能丰富、交互性强的交易类应用程序。



## SDK 目录结构

![image-20241119193209149](../images/SDK_directory_structure.png)

<br>

### package com.pos.sdk.accessory

---

#### class POIGeneralAPI

提供获取 SDK 版本号、SP 版本号、设置 SP 时间、获取 SP 时间、响蜂鸣器等基础功能

---

#### class POISpUpdateManager

提供 SP 升级功能

---

<br>

### package com.pos.sdk.cardreader

---

#### class PosIccCardReader

提供 IC 芯片的上电，寻卡，获取卡片信息，下电操作

---

#### class PosPiccCardReader

提供 PICC 芯片的上电，寻卡，获取卡片信息，下电操作

---

#### class PosMagCardReader

提供 Mag 芯片的上电，寻卡，获取卡片信息，下电操作

---

#### class PosMifareCardReader

提供 Mifare 芯片的上电，寻卡，获取卡片信息，下电操作

<br>

### package com.pos.sdk.emvcore

---

#### class POIEmvCoreManager

提供配置 Aid、CAPK、ExceptionFile、RevocationIPK，设置终端参数，启动交易等功能

---

#### class PosEmvAid

Aid 基础配置类

---

#### class PosEmvCapk

Capk 基础配置类

---

#### class PosEmvExceptionFile

ExceptionFile 基础配置类

---

#### class PosEmvRevocationIPK

RevocationIPK 基础配置类

<br>

### package com.pos.sdk.printer

---

#### class POIPrinterManager

提供打印功能

<br>

### package com.pos.sdk.printer.model

---

#### class BitmapPrintLine

提供添加 Bitmap 图片功能

---

#### class TextPrintLine

提供添加 Text 文本功能

<br>

### package com.pos.sdk.security

---

#### class POIHsmManage

提供写入 DUKPT/MKSK 密钥、获取密钥信息、生成 RSA 密钥、加解密数据等功能




## 将 SDK 集成到开发环境

1. 使用本地的方式集成

    （1）下载 com.pos.sdk_release.jar，放在 Android 工程的 libs 目录；

    （2）在 build.gradle 文件中使用 compileOnly 的方式引用 jar 包

    ~~~
    compileOnly files('extern_libs/com.pos.sdk_release.jar')
    ~~~

    （3）在 AndroidManifest.xml 文件中添加 uses-library

    ~~~
    <uses-library
        android:name="com.pos.sdk"
        android:required="false" />
    ~~~

2. 使用 maven 的方式集成

    （1）在 build.gradle 文件中使用 compileOnly 的方式引用 jar 包

    ~~~
    compileOnly 'com.xc-tech:POS_SDK:2.2.0'
    ~~~

    （2）在 AndroidManifest.xml 文件中添加 uses-library

    ~~~
    <uses-library
        android:name="com.pos.sdk"
        android:required="false" />
    ~~~

    

## 测试是否集成成功

集成完成后可以调用 getSpVersion() 接口看是否能获取到 SP 版本号，能获取到即为集成成功

~~~
POIGeneralAPI.getDefault().getSpVersion()
~~~

结果：

~~~
GetSpVersion    com.xc.payment    I    SP_V1.01.005 IN02C000 240823 PEDSTA=2
~~~

