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

HOUZZkit物联网智能中枢，可以帮助您快速搭建智能家居系统，实现智能家居的控制、管理、自动化等功能。

本文将带您快速了解 HOUZZkit 的基本功能和使用方法。

::: tip 名词解释
 - **HOUZZkit**：一个智能家居解决方案，包含硬件设备、软件系统等。
 - **HOUZZKit OS**：专为 HOUZZkit 设计的操作系统，基于 Linux，支持 Docker 容器技术，可运行各种智能家居软件。 
 - **HOUZZkit Force 1**：专为 HOUZZkit 设计的第一款硬件设备，包含主机、电源适配器等。
:::


## 硬件准备

首次开箱 HOUZZkit Force 1 时，您需要进行简单的组装，具体步骤如下：

1. 安装天线
   - 使用随机附带的工具，拧开固定上盖的四条螺丝，并打开上盖。
   - 取下两个天线孔的橡胶堵头。
   - 取出随机附带的两个ipex转sma天线。
   - 将ipex头小一点的天线安装在wifi模组一侧的天线孔中。
   - 将ipex头大一点的天线安装在zigbee模组一侧的天线孔中。
   - 将ipex小头用力扣在wifi模组的1号天线接口上。
   - 将ipex大头用力扣在zigbee模组的天线接口上。
   - 将两个小辣椒天线拧好。

2. 安装散热硅胶垫
   - 将随机附带的散热硅胶垫贴两侧的透明塑料片去掉。
   - 将散热硅胶垫贴在CPU上。
   - 将上盖盖回去，拧紧四条螺丝。

3. 安装脚垫
   - 将随机附带的四个圆形橡胶脚垫贴在智能中枢的底部。

## 快速使用

1. 连接电源
   - 将随机附带的电源适配器插入智能中枢的电源接口。
   - 将电源适配器插入电源插座。
  
2. 连接网络
   - 请将自备网线插入智能中枢的WAN网口（靠近电源接口的那个）。
   - 将网线插入路由器的任意LAN网口。

3. 等待智能中枢启动完成，大约需要 1 分钟。

4. 通过浏览器访问并使用设备
   -  打开任意一台连接同一路由器网络的电脑。
   -  打开浏览器，输入 [http://houzzkit.local](http://houzzkit.local)，进入智能中枢的欢迎界面。

5. 在HOUZZkit OS中的具体操作，请参考 [HOUZZkit OS 文档](../houzzkitos/README.md)

::: warning 
如果未能顺利打开网页，请尝试以下几种方式访问
:::

**方法一**

1. 使用网线将电脑直接连接到智能中枢的LAN网口（远离电源接口的那个）。
2. 打开电脑，在浏览器输入[http://houzzkit.os](http://houzzkit.os)，即可进入智能中枢的欢迎界面。

**方法二**

1. 打开路由器后台，并找到连接到路由器的设备列表。
2. 在列表中找到名称为houzzkit的设备。
3. 记住设备的IP地址，例如`192.168.1.100`。
4. 打开电脑，在浏览器中输入 `http://192.168.1.100`(此处只是举例，实际IP地址以实际情况为准)。

**方法三**

1. 找一条HDMI线，将中枢和任意有HDMI接口的屏幕连接。
2. 打开屏幕，切换到HDMI输入源。
3. 确认网线已经正常连接路由器和中枢WAN口（靠近电源接口的那个）。
4. 断开中枢电源，然后重新连接电源。
5. 稍等片刻，屏幕上会显示如下字样：
   ```text:no-line-numbers
   You can access HOUZZKIT OS through a browser at http://192.168.1.100
   ```
6. 打开电脑，在浏览器中输入 `http://192.168.1.100`(此处只是举例，实际IP地址以实际情况为准)。


## 固件刷新

如果因为某些严重的操作失误，导致系统无法正常使用，您可以通过刷新固件的方式恢复系统。方法如下：

::: warning 
1. 刷机操作目前只可以在Windows操作系统下进行。
2. HOUZZkit Force 1 使用的核心芯片为瑞芯微的RK3568，故刷机采用瑞芯微官方提供的方案。
3. 刷机需要打开设备上盖。
4. 需要的固件请在        提前现在。
:::

1. 安装驱动程序
   下载 Rockchip Driver Assistant ，当前最新版本为 5.1.1 。
   提供几个下载链接，任意下载一个即可。
   [www.mediafire.com](https://www.mediafire.com/file/ijail21i7h73d5o/Rockchip_DriverAssitant_v5.1.1.zip)
   [androiddatahost.com](https://androiddatahost.com/wp-content/uploads/Rockchip_DriverAssitant_v5.1.1.zip)
   下载后，解压缩，打开文件夹，双击 `DriverInstall.exe`，安装驱动程序。

2. 安装刷机程序
   下载 RKDevTool on Windows ，本教程使用的版本为 v2.86。 v.2.8x v.2.9x版本都行
    提供几个下载链接，任意下载一个即可。
    [RKDevTool_Release_v2.86-CN](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.86.zip)
    [RKDevTool_Release_v2.84-CN](https://meta.box.lenovo.com/v/link/view/02755469abfe4930a3425742d8d31ea2)
   
3. 使用随机附带的公对公USB OTG 线将智能中枢与刷机电脑连接
    智能中枢的 USB OTG 接口为靠近设备底部的USB口。

4. 将智能中枢电源接口接入电源。

5. 进入刷机模式
    - 按住智能中枢侧面的 `Recovery` 按钮不放。
    - 按一下智能中枢侧面的 `Reset` 按钮。
    - 等待5秒，松开 `Recovery` 按钮。
    - RKDevTool 软件下方，出现 “发现一个Recovery设备”字样，表示进入刷机模式成功。
  
6. 刷固件
    - 点击 `升级固件` 页签。
    - 点击 `固件` 按钮，并选择已经下载好的固件镜像。选择的固件文件名必须包含`FULL`字样。
    - 等待30s左右，软件会读取固件相关信息并展示出来。
    - 点击升级按钮，等待1-2分钟即可。

<!-- ## 目录

- [快速上手子页面](started.md)

- [页面展示](page.md)

- [禁用展示](disable.md)

- [加密展示](encrypt.md)

- [测试页面](mydoc.md) -->
