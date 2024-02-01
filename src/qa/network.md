---
# 这是文章的标题
title: 网络相关问题
index: true
# 这是页面的图标
icon: fa-solid fa-network-wired
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Yin Baiyuan
# 设置写作时间
date: 2024-2-1
# 一个页面可以有多个分类
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false

---

## Q: 如何通过Wifi连接到路由器？
A: 目前，HOUZZkit OS 暂不支持通过UI来管理wifi设备（研发中）。可以通过以下终端命令来实现wifi连接。
```
sudo nmcli device wifi connect {ssid} password {password} ifname wlan0
```
其中，{ssid} 和 {password} 需要修改为目标网络的SSID和密码。（大括号不保留）
断开wifi连接，可以执行以下命令：
```
sudo nmcli dev dis wlan0
```

## Q: 如何修改静态IP地址？
A: 目前，HOUZZkit OS 暂不支持通过UI来修改IP地址（研发中）。可以通过以下方法来实现修改静态IP。
 - 在HOUZZkit OS的桌面上点开终端应用。
 - 输入以下命令打开配置文件。
```
sudo vi /etc/network/interfaces
```
 - 按 i 键，进入编辑状态。在文件结尾另起一行，输入以下内容:
```
auto eno0
iface eno0 inet static
address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 114.114.114.114
```
其中所有涉及到的IP请根据您的实际情况修改。
 - 按 esc 键退出编辑状态。输入:wq ，保存并退出文件。
 - 输入以下命令，重启系统即可。
```
sudo reboot
```

## Q: 如何搭建SAMBA服务？
A: 目前，HOUZZkit OS 暂不支持通过UI来搭建SAMBA服务（研发中）。可以通过以下方法来实现。
 - 在HOUZZkit OS的桌面上点开终端应用。
 - 执行以下命令安装samba服务
```
sudo apt install samba samba-common
```
 - 在期望的目录下创建共享到内网的文件夹。比如：
```
mkdir /home/yinbaiyuan/UNIVERSAL
```
 - 打开SAMBA服务配置文件
```
sudo vim /etc/samba/smb.conf
```
 - 按 i 键，进入编辑状态，在文件结尾另起一行，输入以下内容：
```
[UNIVERSAL]
path = /home/yinbaiyuan/UNIVERSAL
available = yes
browseable = yes             
public = yes               
writable = yes             
valid users = yinbaiyuan
```
所有涉及到目录路径，用户名的地方，请根据实际情况修改。
 - 按 esc 键退出编辑状态。输入:wq ，保存并退出文件。
 - 输入以下命令，设置访问SAMBA服务的用户名和密码。
```
sudo smbpasswd -a yinbaiyuan
```
其中，yinbaiyuan为用户名，请根据实际情况修改。
 - 输入以下命令，重启smb服务器。
```
sudo /etc/init.d/smbd restart
```