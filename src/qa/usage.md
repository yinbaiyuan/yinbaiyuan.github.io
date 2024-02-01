---
# 这是文章的标题
title: 使用问题
index: true
# 这是页面的图标
icon: fa-solid fa-network-wired
# 这是侧边栏的顺序
order: 2
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

## Q: 如何部署Zigbee2MQTT？
A: 在部署Zigbee2MQTT前，需要部署独立的MQTT服务器。您可以在HOUZZkit OS中方便的部署MQTT服务。
在应用商店中，安装“EMQX”或“Mosquitto broker”即可自动部署MQTT服务。
以上二选一安装即可。

EMQX的MQTT服务地址为 mqtt://127.0.0.1:1883
Mosquitto broker的MQTT服务地址为 mqtt://127.0.0.1:18883
(以上两个地址的端口不一样)

然后，可以在应用商店中安装 Zigbee2MQTT。

安装完成后，点击桌面的 Zigbee2MQTT图标，会进入启动设置界面，根据您部署的MQTT服务，填入相应的地址，并提交即可。

等待Zigbee2MQTT启动后，需要再等待1分钟左右，即可进入到Z2M的管理页面。
