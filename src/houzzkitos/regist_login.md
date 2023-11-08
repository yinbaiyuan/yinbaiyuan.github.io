---
title: 注册与登录
index: true
order: 1
author: Yin Baiyuan
date: 2023-10-30
icon: book
category:
  - 使用指南
---

## 注册
首次使用HOUZZkit OS，必须要注册一个账户。

![注册界面](/assets/image/hos_doc/hos_doc_regist.jpg)

根据页面提供的表单和要求，填写相关信息，点击“注册”按钮，即可完成注册。

注册成功后，系统会在linux系统中创建一个新的用户，该用户的用户名和密码与您在注册时填写的用户名和密码一致。

可以基于此账户，通过ssh远程登录系统。

此账户会加入root组，可以通过 `sudo -i` 命令提权为root用户。


## 登录

注册成功后，系统会自动登录，并跳转到主页面。

如果您在主页面长时间未操作（2小时），会自动退出登录，并跳转到登录页面。

![登录界面](/assets/image/hos_doc/hos_doc_login.jpg)

在登录页面登录时，选择记住密码，登录成功后，不会再因为长时间未操作，退出登录。