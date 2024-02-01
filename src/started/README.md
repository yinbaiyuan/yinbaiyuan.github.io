---
title: 快速上手
index: false
author: Yin Baiyuan
date: 2023-10-13
icon: rocket
# category:
#   - 使用指南
#   - 测试页面
---

## 欢迎

![HOUZZkit 蓝精灵](/assets/image/houzzkit/houzzkit_f1_show.jpg)

**HOUZZkit智能家居中枢**，可以帮助您快速搭建智能家居系统。可以将不同品牌的设备接入到中枢，也可以将已经接入的设备桥接到其他智能家居生态（Homekit，米家等）。实现多品牌设备的统一控制、管理、自动化。

本文将带您快速了解 **HOUZZkit智能家居中枢** 的基本功能和使用方法。

::: tip 名词解释
 - **HOUZZkit**：一个智能家居解决方案，包含硬件设备、软件系统等。
 - **HOUZZKit OS**：专为 HOUZZkit智能中枢 设计的操作系统，基于Linux，支持 Docker 容器技术，可运行各种智能家居软件。 
 - **HOUZZkit 蓝精灵**：专为 HOUZZkit 设计的第一款硬件设备，包含主机、电源适配器等。
:::

## 快速使用

### 背部接口释义
![](/assets/image/houzzkit/houzzkit_f1_back_side.jpeg)
- AV：3.5mm音视频输出接口。
- HDMI：HDMI视频输出接口。
- WAN/LAN：1000Mbps 网口。**靠近HDMI的为管理口，用来直连电脑。靠近USB的为WAN口，用来连接路由器**。
- USB：上方接口为USB 3.0接口。
- OTG/USB: 下方接口为USB 3.0接口。可以自适应OTG和HOSTS模式。设备刷机必须要连此USB口。
- DC IN：电源接口，标准电压为直流12V，推荐最小电流为2A。
  
::: tip 关于两个网口的说明
两个网口的硬件配置完全一致，但考虑到HOUZZkit智能中枢的主要使用场景，在软件上做了区分。
WAN口（靠近USB）用来连接路由器，LAN口（靠近HDMI）用来连接电脑。
:::

### 使用步骤

1. 连接电源
   - 将随机附带的电源适配器插入智能中枢的电源接口。
   - 将电源适配器插入电源插座。
  
2. 连接网络
   - 请将自备网线插入智能中枢的WAN网口（靠近电源接口的那个）。
   - 将网线插入路由器的任意LAN网口。

3. 等待智能家居中枢启动完成，大约需要 1 分钟。

4. 通过浏览器访问并使用设备
   -  打开任意一台连接同一路由器网络的电脑。
   -  打开浏览器，输入 [http://houzzkit.local](http://houzzkit.local)，进入智能中枢的欢迎界面。

5. 在HOUZZkit OS中的具体操作，请参考 [HOUZZkit OS 文档](../houzzkitos/README.md)


### 其他连接方案
::: warning 
如果未能顺利打开网页，请尝试以下几种方式访问
:::

**方法一**

1. 使用网线将电脑直接连接到智能中枢的LAN网口（靠近HDMI的那个）。
2. 打开电脑，在浏览器输入[http://houzzkit.os](http://houzzkit.os)，即可进入智能中枢的欢迎界面。

**方法二**

NOTE: 确认电脑网线连接路由器，中枢的WAN口也连接路由器。
1. 打开路由器后台，并找到连接到路由器的设备列表。
2. 在列表中找到名称为houzzkit的设备。
3. 记住设备的IP地址，例如`192.168.1.100`。
4. 打开电脑，在浏览器中输入 `http://192.168.1.100`(此处只是举例，实际IP地址以实际情况为准)。

**方法三**

NOTE: 确认电脑网线连接路由器，中枢的WAN口也连接路由器。
1. 找一条HDMI线，将中枢和任意有HDMI接口的显示器连接。
2. 打开显示器，切换到HDMI输入源。
3. 确认网线已经正常连接路由器和中枢WAN口（靠近USB的那个）。
4. 断开中枢电源，然后重新连接电源。
5. 稍等片刻，显示器上会显示如下字样：
   ```text:no-line-numbers
   You can access HOUZZKIT OS through a browser at http://192.168.1.100
   ```
6. 打开电脑，在浏览器中输入 `http://192.168.1.100`(此处只是举例，实际IP地址以实际情况为准)。





