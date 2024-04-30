---
title: 固件使用
index: true
order: 2
author: Yin Baiyuan
date: 2024-2-1
icon: book
category:
  - 使用指南
---

## 注意
HOUZZkit 设备的固件为基于硬件特殊定制的固件，HOUZZkit固件不可用于其他设备，其他第三方的设备也不可用于HOUZZkit硬件。否则会有损坏设备芯片的风险。


## 固件烧录

如果因为某些严重的操作失误，导致系统无法正常使用，您可以通过刷新固件的方式恢复系统。

::: tip 固件下载地址 
固件比较大，目前发布在以下地址，请大家选择版本下载，一般选择最新版本即可。
地址一：[百度网盘](https://pan.baidu.com/s/1uH4C5_rmPRciLv5-Yr_etw?pwd=8888)
:::

::: warning 
1. 刷机操作目前只可以在Windows操作系统下进行。
2. HOUZZkit 蓝精灵 使用的核心芯片为瑞芯微的RK3568，故刷机采用瑞芯微官方提供的方案。
:::

### 准备刷机环境
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

### 为智能中枢刷固件
1. 使用随机附带的公对公USB OTG 线将智能中枢与刷机电脑连接
   **智能中枢的 USB OTG 接口为靠近设备底部的USB口**。
      ![](/assets/image/houzzkit/houzzkit_f1_otg_wire.jpeg)
    

2. 将智能中枢电源接口接入电源。

3. 进入刷机模式
      ![](/assets/image/started/houzzkit_f1_right_side_2.jpg)
    - 准备两个曲别针掰直了。
    - 用曲别针捅进去智能中枢侧面的 `Recovery` 按钮不放。
    - 用另一个曲别针捅一下智能中枢侧面的 `Reset` 按钮。
    - 等待5秒，松开 `Recovery` 按钮。
    - RKDevTool 软件下方，出现 `发现一个LOADER设备` 字样，表示进入刷机模式成功。
      ![](/assets/image/started/houzzkit_started_step_6.jpg)
  
4. 刷固件
      ![](/assets/image/started/houzzkit_started_step_7.jpg)
    - 点击 `升级固件` 页签。
    - 点击 `固件` 按钮，并选择已经下载好的固件镜像。选择的固件文件名必须包含`FULL`字样。
    - 等待30s左右，软件会读取固件相关信息并展示出来。
    - 点击`升级`按钮，等待1-2分钟即可。
      ![](/assets/image/started/houzzkit_started_step_8.jpg)

**固件烧录完毕后，智能中枢会自动重启，稍等30s左右，即可通过浏览器访问智能中枢。**

## 烧录bootloader和Linux kernel
如果因为某些原因，只需要烧录bootloader或者linux内核镜像，可以使用以下办法。

::: tip 
刷机环境：
完全按照`固件烧录`的刷机环境准备即可

固件下载：
文件名为 houzzkitos_firmware_uboot_xxxxxxxxxx.img 的文件为bootloader镜像。
文件名为 houzzkitos_firmware_kernel_xxxxxxxxxx.img 的文件为linux内核镜像。
地址一：[百度网盘](https://pan.baidu.com/s/1uH4C5_rmPRciLv5-Yr_etw?pwd=8888)
:::

### 烧录步骤
1. 按照上述方式[进入刷机模式](./firmware.md#为智能中枢刷固件)。
2. 烧录分区
   ![](/assets/image/started/houzzkit_started_step_10.jpg)
   - 点击`下载镜像`页签
   - 在表格控件的空白区域右击，选择`添加项`
   - 烧录bootloader
     - 将地址改为 0x00004000
     - 将名字改为 uboot
     - 路径选择 bootloader 镜像文件
     - 确认勾选行首复选框
   - 烧录linux kernel
     - 将地址改为 0x00008000
     - 将名字改为 boot
     - 路径选择 linux kernel 镜像文件
     - 确认勾选行首复选框
   - 点击`执行` ，开始烧录
   - 如果提示失败，可以勾选`强制按地址写`后再试