---
title: HDP安装包制作(基础)
index: true
order: 1
author: Yin Baiyuan
date: 2024-4-24
icon: book
category:
  - 开发指南
---

## 简述
在HOUZZkit OS系统中，可以通过各种方式安装并使用Docker容器类应用。具体方式包括从应用商店直接下载，通过自定义安装填写表单安装，导入开发者分享的hdp(HOUZZkit Docker Package)安装包安装。

本文主要介绍，创建hdp安装包的具体方法。

hdp包不仅定义了docker容器启动需要的所有参数，更重要的是允许开发者自由定义Docker容器启动前后的各种可执行逻辑，可以通过表单，显性的和使用者进行交互。

比如，我们要制作一个Zigbee2MQTT的安装包。为了让Z2M能正常运行，需要配置MQTT服务器的地址，需要定义Zigbee网关的硬件定制，需要在Z2M配置文件里创建具体的配置信息，需要在HA里安装MQTT集成并配置。这些过程全部都可以通过hdp包所定义的相关机制实现。作为用户，只需要填写简单的MQTT服务器地址，剩下的工作全部由hdp包中的脚本完成。

再比如，HOUZZkit OS 由于追求稳定性的各种考量，应用商店中的应用版本要落后于应用的最新版本。假如用户需要使用最新版本的HomeAssistant，只需要导入开发者制作的第三方包，即可轻松安装并使用最新的HomeAssistant应用。

## 安装包制作步骤（基础）

### 定义Docker容器的基本信息

  1. 打开`应用商店`-`自定义安装 `
  2. 填写待安装镜像的相关信息
  3. 点击右下角`安装`按钮

::: tip 参考
自定义安装表单项的具体说明，可以查看 [自定义安装](../houzzkitos/custom_docker_installation.md)
:::

例如，自定义安装一个Docker管理工具，Portainer。
打开自定义安装，填入以下内容：
```
镜像名称：
  portainer/portainer-ce
Docker镜像版本：
  linux-arm64-2.19.5
应用名称:
  Portainer
容器主机名:
  portainer
Web UI:
  9000
端口：
  主机：9000  容器：9000
卷：
  主机：/var/run/docker.sock    容器：/var/run/docker.sock
  主机：/var/data/portainer     容器：/data
应用图标：
  自己上传任意尺寸大于96*96像素的图片

其他表单保持默认即可
```

填好后如下：
![安装Portainer的表单示例](/assets/image/houzzkit_docker_package_make/custom_install_portainer_1.jpg)

点击`安装`按钮，可以在HOS桌面上看到安装过程动画

![Portainer安装过程](/assets/image/houzzkit_docker_package_make/custom_install_portainer_2.jpg)

根据网络状态，等待几十秒到几分钟不等，应用安装完毕，并自动启动。

### 导出包

当应用能够正常启动后，右键点击图标，开启导出安装包向导。

表单字段含义如下：

#### Bundle ID
`必填项`
- 安装包的唯一性标识，Bundle ID 一样，则认为是同一个应用。
- BundleID由三部分组成，com、镜像名称、和自定义部分。三段之间用`.`相连。其中镜像名称，如果包含`/`，则用`.`替换。
- 自定义部分可以由导出者指定，只可以输入数字和英文大小写字母。

#### 安装包版本
`必填项`
- 用于指定安装包的版本号。注意这里的版本号指导出包的版本号，和镜像版本无关。

#### 应用描述
`必填项`
- 用于指定，右键点击应用图标，选择`信息`后，显示的内容。
- 文本内容遵循 markdown 格式。

#### 修改内容
`必填项`
- 用于指定此次导出包，进行了哪些配置信息的修改。
- 此内容会记录于导出包的`update.log`文件内。

#### 创建者/修改人
`必填项`
- 基于自定义安装应用的导出安装包，此处显示创建人。
- 基于导入安装应用、应用商店安装应用的导出安装包，此处显示修改人。

#### 创建人/修改人发布链接
`选填项`
- 填入后，点击创建者/修改人的名称，会跳转到此链接。

#### 开源协议
`必填项`
- 指定此包以哪种开源协议进行分享和传播。
- 导出包后，会生成对应协议的LICENSE文件。
- 具体选择哪一个开源协议，可以参考 [choosealicense](https://choosealicense.com/)


### 制作包含自定义配置的HDP包

按照本文档上面的步骤，开发者可以快速制作一个hdp包，并分享给其他HOS用户。想要制作包含自定义配置的hdp包，请继续参考[HDP安装包制作(高级)](./houzzkit_docker_package_make_advance.md)