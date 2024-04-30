---
title: HDP安装包制作(高级)
index: true
order: 2
author: Yin Baiyuan
date: 2024-4-24
icon: book
category:
  - 开发指南
---

对于很多的应用来说，想要正确的安装并使用，并不是简单的启动一个容器就行的。比如Zigbee2MQTT应用，需要配置MQTT服务器、zigbee网关设备地址，创建对应的配置文件，然后再启动容器，Z2M应才能够正常运行。

HOS为Docker应用提供了`应用初始化配置`机制，开发者可以灵活编写配置流程，执行自动化脚本，从而运行容器启动前后的各种可执行逻辑。

只需在自定义安装中，上传`应用初始化配置文件`后，再安装应用，HOS会根据文件定义的自动化逻辑，进行用户交互和执行初始化脚本。

## `应用初始化配置文件`介绍

- `应用初始化配置文件`是`yaml`格式的纯文本文件。文件名须固定为`flow_config.yml`。
- yaml语法注意项
  - 大小写敏感
  - 使用缩进标是层级关系
  - 缩进不允许使用tab，只允许空格
  - 缩进的空格数不重要，只要相同层级的元素左对齐即可
  - `#`表示注释


## `应用初始化配置文件`范例

``` yaml
version: 1.0.0                                #配置文件语法版本号
step_pointer: "step1"                         #要执行的第一个步骤名称
steps:                                        #列表形式定义所有步骤，每个步骤为一个对象
  step1:                                      #步骤对象，key值为步骤名称
    flow_type: form                           #步骤类型，此处为`form`表单类型
    title : 表单提交                           #步骤交互弹框的标题
    form:                                     #定义具体的表单项
      - type: input
        key: mqtt_service
        value: mqtt://127.0.0.1:1883
        default_value: ''
        label: 填入mqtt服务地址
        action: form
        notice: 请填入正确mqtt地址
        check_auth: ''
        required: true
        disable: false
    special_jump:
      key: ''
    jump_step : ''
    next_step : step2
    button_content_cancel: '取消'
    button_content_jump: '跳过'
    button_content_submit : '提交'
  step2:
    flow_type: script
    title: 初始化脚本
    script:
      - path: resource/script.py
        set_script_key_param: []
        get_param: ["mqtt_service"]
        script_info: ''
    script_info: ''
    jump_step: ''
    next_step: step3
    button_content_cancel: '取消'
    button_content_submit: '执行'
  step3:
    flow_type: create_file
    title: 创建文件
    script_info: ''
    jump_step: ''
    next_step: ''
    button_content_cancel: '取消'
    button_content_submit: '执行'
```

### 根结构 `字典`

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| version | string | 1.0.0 | - | 配置文件语法版本号 |
| step_pointer | string | - | - | 要执行的第一个步骤名称 |
| steps | array | - | - | 以列表形式定义所有步骤，每个步骤为一个对象 |

``` yaml
version: 1.0.0
step_pointer: "step1"
steps:
  step1:
    ......
  step2:
    ......
```

### steps 数组
- steps 数组的每一个元素都是一个对象，用于定义初始化流程的一个具体步骤。
- 对象key值为步骤名称，对象value值为步骤的具体定义。
- 步骤具体定义如下：
  
| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| step_type | string | 1.0.0 | - | 步骤类型，用于定义和用户的不同交互类型，如填写表单、执行脚本、获取HA Token等 |
| title | string | - | - | 步骤交互弹框的标题 |
| form | array | - | - | 定义表单项，每一个数组元素为一个`表单对象` |



## 步骤类别


## 表单类别