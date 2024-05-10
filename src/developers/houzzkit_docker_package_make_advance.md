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

在详细了解配置规范前，不妨先看两个具体例子，从整体上了解一下结构

### 范例1

以下是Zigbee2MQTT应用的初始化配置文件

``` yaml
version: 1.0.0                                #配置文件语法版本号
step_pointer: "step1"                         #要执行的第一个步骤名称
steps:                                        #列表形式定义所有步骤，每个步骤为一个对象
  step1:                                      #步骤对象，key值为步骤名称
    flow_type: form                           #步骤类型，此处为`form`表单类型
    title : 配置MQTT服务器                     #步骤交互弹框的标题
    form:                                     #定义具体的表单项
      - type: input                           #表单类型
        key: mqtt_service                     #用于获取表单value的key值
        value: mqtt://127.0.0.1:1883          #默认的表单value值
        placeholder: ''                       #当输入框为空时显示的内容
        label: 填入MQTT服务地址                #表单标题
        mismatch_message: 请填入正确MQTT地址   #当输入内容和正则表达式不匹配显示的报错信息
        check_regular: ''                     #输入框内容正则匹配表达式
        required: true                        #是否为必填项
        disable: false                        #是否可用
    jump_step : ''                            #定义跳过此步骤后的跳转目标
    next_step : step2                         #定义此步骤正确完成后的下一个步骤
    button_content_submit : '提交'            #定义表单提交按钮显示的文字
  step2:                                      #再定义一个步骤，步骤名称为step2
    step_type: run_shell_script               #定义步骤类型为 `run_shell_script`
    parameters:                               #步骤特别参数
      shell_path: script.sh                   #要运行脚本的路径
      shell_parameters: [ "mqtt_service" ]    #定义脚本传参，可以把已经执行过的步骤中的表单值传入脚本
    next_step: step3                          #定义玩出的下一个步骤
  step3:                                      #定义步骤，步骤名称step3
    step_type: create_file                    #定义步骤类型为`create_file`
    parameters:                               #定义特别参数
      file_path: '/tmp/configuration.yaml'    #定义写入内容的原文件路径
      write_to_path: '/var/data/zigbee2mqtt/data/configuration.yaml' 
                                              #定义需要写入内容的目标文件
```

### 范例2

以下是Node-RED应用的初始化配置文件

``` yaml
version: 1.0.0                                #配置文件语法版本号
step_pointer: "step1"                         #要执行的第一个步骤名称
steps:                                        #列表形式定义所有步骤，每个步骤为一个对象
  step1:                                      #步骤对象，key值为步骤名称
    step_type: install_integration            #步骤类型定义, 用于安装HA集成
    parameters:                               #特别参数
      integration_path: node_red.zip          #集成安装包的路径
    next_step: step2                          #定义下一个步骤
  step2:                                      #第二个步骤
    step_type: start_container                #步骤类型定义，用于启动容器
    next_step: step3                          #定义下一个步骤
  step3:                                      #第三个步骤
    step_type: run_shell_script_in_container  #步骤类型定义，用于在容器内执行脚本
    parameters:                               #特别参数
      shell_path: node.sh                     #待执行的脚步路径
      run_path: "/var/local"                  #容器内执行脚本的目录
      shell_info: '更换npm源，加速Node-RED节点下载速度'
                                              #脚本的介绍信息
    next_step: step4                          #定义下一个步骤
  step4:                                      #第四个步骤
    step_type: get_ha_access_token            #步骤类型定义，用于获取HA长效Token
    next_step: step5                          #定义下一个步骤
  step5:                                      #第五个步骤
    step_type: run_shell_script               #步骤类型定义，用于在主机内直接执行脚本
    parameters:                               #特别参数
      shell_path: init_node_script.sh         #待执行的脚本路径
      shell_parameters: ["home-assistant-token"]
                                              #需要传递给脚本的参数
      shell_info: '自动配置Node-RED集成，安装及配置Node-RED和Home Assistant通讯节点'
                                              #脚本的介绍信息
```

## 配置文件结构详解

### 根结构 `对象`

- 文件跟结构是`对象`类型，所有字段如下

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| version | string | 1.0.0 | - | 配置文件语法版本号 |
| step_pointer | string | - | - | 要执行的第一个步骤名称 |
| steps | object | - | - | 以列表形式定义所有步骤，每个步骤为一个对象 |

结构示例：
``` yaml
version: 1.0.0
step_pointer: "step1"
steps:
  step1:
    ......
  step2:
    ......
```

### steps `对象`
- steps 对象的每一个元素都是一个对象，用于定义初始化流程的一个具体步骤。
- 对象key值为步骤名称，对象value值为步骤的具体定义。
- 步骤对象的定义如下：
  
| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| step_type | string | - | TRUE | 步骤类型，用于定义和用户的不同交互类型，如填写表单、执行脚本、获取HA Token等 |
| next_step | string | - | FALSE | 定义要执行的下一个步骤。如果不定义或值为空，则认为此步骤为流程的最后一步 |
| skip_to | string | - | FALSE | 可跳转步骤。定义后，交互框会增加一个`跳过`按钮，点击后，当前步骤不执行，直接跳转到此处指定的步骤 |

结构示例：
``` yaml
step1:                                      
    step_type: start_container              
    next_step: step2                       
    skip_to:  step3
```

### 步骤类型概述
- 灵活的初始化配置定义，主要是由各种类型的步骤组合而成的。合理的使用各种步骤，可以实现各种复杂的初始化逻辑。
- 每一个步骤类型都支持上述的通用字段定义，同时不同步骤也有各自支持的字段。
- 以下将详细介绍每种步骤的定义方法。

### `alert` 类型
- `alert`类型步骤只用于显性的给用户一个提示。
- 步骤对象独有字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| title | string | - | TRUE | 定义提示信息的标题 |
| sub_title | string | - | TRUE | 定义副标题，也就是标题下面的小字 |

结构示例：
``` yaml
step1:                                      
    step_type: alert              
    next_step: ''                       
    skip_to:  ''
    title: '欢迎使用'
    sub_title: '本初始化配置由houzzkit团队开发'
```

### `start_container` 类型
- `start_container`类型步骤用于向用户请求启动当前容器的权限。
- 用户同意后，当前用户容器会被启动。
- 此步骤对象无独有字段。

结构示例：
``` yaml
step1:                                      
    step_type: start_container              
    next_step: ''                       
    skip_to:  ''
```

### `restart_ha` 类型
- `restart_ha`类型步骤用于向用户请求重启Home Assistant应用容器的权限。
- 用户同意后，Home Assistant应用容器会被重启。
- 此步骤对象无独有字段。

结构示例：
``` yaml
step1:                                      
    step_type: restart_ha              
    next_step: ''                       
    skip_to:  ''
```

### `get_ha_access_token` 类型
- `get_ha_access_token`类型步骤用于向用户请求获取Home Assistant长效Token的权限。
- 用户同意后，后续脚本执行类步骤可以通过 `home-assistant-token` 这个key获取到Token的具体值。
- 此步骤对象无独有字段。

结构示例：
``` yaml
step1:                                      
    step_type: get_ha_access_token              
    next_step: ''                       
    skip_to:  ''
```

### `create_file` 类型
- `create_file`类型步骤用于向用户请求将文件写入某些系统目录的权限。
- 用户同意后，指定的原文件内容将写入目标文件。
- 步骤对象独有字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| parameters | object | - | TRUE | 定义步骤使用的特殊参数 |

- 参数具体字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| file_path | string | - | TRUE | 待被写入的原文件绝对路径 |
| write_to_path | string | - | TRUE | 需要写入内容的目标文件绝对路径 |

结构示例：
``` yaml
step1:                                      
    step_type: create_file              
    next_step: ''                       
    skip_to:  ''
    parameters:                               
      file_path: '/tmp/configuration.yaml'    
      write_to_path: '/var/data/zigbee2mqtt/data/configuration.yaml'
```

### `install_integration` 类型
- `install_integration`类型步骤用于向用户请求为Home Assistant安装集成的权限。
- 用户同意后，指定的集成包将会被安装到Home Assistant。
- 安装过程将会自动重启Home Assistant，重启后安装的集成即可生效。
- 配置内的所有相对路径都以hdp包内的resource文件夹为基准路径。
- 步骤对象独有字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| parameters | object | - | TRUE | 定义步骤使用的特殊参数 |

- 参数具体字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| integration_path | string | - | TRUE | 待安装的集成包的相对路径 |

结构示例：
``` yaml
step1:                                      
    step_type: install_integration        
    next_step: ''                       
    skip_to:  ''
    parameters:                             
      integration_path: node_red.zip  
```

### `form` 类型
- `form`类型步骤用于方便用户填写一些必要的信息。
- 填写并提交后，后续脚本执行类步骤可以通过各个表单的key值获取这个表单的value。
- 步骤对象独有字段如下：
  
| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| title | string | - | TRUE | 定义表单标题标题 |
| button_content_submit  | string | - | FALSE | 定义表单提交按键显示的文字 |
| form  | array | - | TRUE | 定义表单项 |
| next_step_by_form  | object | - | FALSE | 根据表单选择内容进行流程跳转控制 |

- `form`字段通用数据结构

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| type | string | - | TRUE | 表单类型 |
| key  | string | - | TRUE | 获取表单的key值 |
| value  | string/array | - | FALSE | 表单默认值 |
| label  | string | - | FALSE | 表单标题 |
| required  | bool | - | FALSE | 表单是否为必填项 |
| disable  | bool | - | FALSE |表单是否可用 |

- 表单支持的类型和专用数据结构请参考以下示例

- `input`表单类型和类型专用数据结构

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| placeholder | string | - | FALSE | 当输入框为空时显示的提示信息 |
| check_regular  | string | - | FALSE | 用于对输入内容进行模式匹配的正则表达式 |
| mismatch_message  | string | - | FALSE | 当模式匹配失败后提示的信息 |
  
``` yaml
step1:
    step_type: form
    next_step: ''                       
    skip_to:  ''
    title: TEST_FORM
    button_content_submit : '执行'
    form:
      - type: input                             #输入框类型
        key: phone_number                       #获取表单的key值                   
        value: ''                               #表单的默认值
        label: 填写手机号码                      #表单标题
        placeholder: '请输入正确的手机号格式'     #当输入框为空时显示的提示信息
        check_regular: '/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/'
                                                #对输入内容进行模式匹配的正则表达式
        mismatch_message: 手机号格式错误         #当模式匹配失败后提示的信息
        required: true                          #此表达单位必填项
        disable: false                          #此表单可用

      - type: password                          #密码输入框类型
        key: user_password                      #获取表单的key值                   
        value: ''                               #表单的默认值
        label: 填写用户密码                      #表单标题
        required: true                          #此表达单位必填项
        disable: false                          #此表单可用

      - type: select                            #下拉列表框类型
        key: city                               #获取表单的key值 
        label: 所在城市                          #表单标题
        value: beijing                          #表单的默认值
        options:                                #定义下拉列表选项
           - label: 北京                        #选项一
             value: beijing                     #选项一的值
           - label: 上海                        #选项二
             value: shanghai                    #选项二的值
           - label: 厦门                        #选项三
             value: xiamen                      #选项三的值
        placeholder: "选择正确的城市"             #下拉列表未选择显示的提示信息

      - type: multiple_select                   #多选下拉列表框类型
        key: room                               #获取表单的key值 
        label: 所在房间                          #表单标题
        value: ['bedroom','kitchen']            #表单的默认值
        options:                                #定义下拉列表选项
           - label: 卧室                        #选项一
             value: bedroom                     #选项一的值
           - label: 客厅                        #选项二
             value: livingroom                  #选项二的值
           - label: 餐厅                        #选项三
             value: kitchen                     #选项三的值
        placeholder: "选择正确的房间"             #下拉列表未选择显示的提示信息

      - type: radio                             #单选框类型
        key: day                                #获取表单的key值 
        label: 哪一天                            #表单标题
        value: ''                               #表单的默认值
        options:                                #定义选项
           - label: 今天                        #选项一
             value: today                       #选项一的值
           - label: 明天                        #选项二
             value: tomorrow                    #选项二的值

      - type: checkbox                          #复选框类型
        key: time                               #获取表单的key值
        label: 具体时间                          #表单标题
        value: [7,8]                            #表单的默认值
        option:                                 #定义选项
          - label: 七点                         #选项一
            value: 7                            #选项一的值
          - label: 八点                         #选项二
            value: 8                            #选项二的值
          - label: 九点                         #选项三
            value: 9                            #选项三的值

      - type: slider                            #滑动选择器类型
        key: minute                             #获取表单的key值
        label: 持续时长                          #表单标题
        value: 15                               #表单的默认值
        min: 10                                 #最小值
        max: 20                                 #最大值

      - type: switch                            #开关类型
        key: alarm                              #获取表单的key值
        label: 是否提醒                          #表单标题
        value: true                             #表单的默认值
```

- 使用表单进行流程控制的方法
  当需要根据用户的选择，进行不同流程跳转的时候，可以通过以下方法实现
  `select`、`radio`、`switch`、`input`、`slider`类型的表单支持此方法
  当表单值无法与定义值匹配时，跳转到`skip_to`字段定义的步骤
``` yaml
step1:
    step_type: form
    next_step: ''                       
    skip_to:  ''
    title: TEST_FORM
    button_content_submit : '执行'
    form:
      - type: radio                             #单选框类型
        key: day                                #获取表单的key值 
        label: 哪一天                            #表单标题
        value: ''                               #表单的默认值
        options:                                #定义选项
           - label: 今天                        #选项一
             value: today                       #选项一的值
           - label: 明天                        #选项二
             value: tomorrow                    #选项二的值

      - type: switch                            #开关类型
        key: alarm                              #获取表单的key值
        label: 是否提醒                          #表单标题
        value: true                             #表单的默认值

    skip_to_by_form:                            #根据表单选择内容进行流程跳转控制
        key: "day"                              #定义基于哪个表单进行跳转控制
        today: "step2"                          #表单值为today时，跳转到step2
        tomorrow: "step3"                       #表单值为tomorrow时，跳转到step3
```

### `run_shell_script` 类型
- `run_shell_script`类型步骤用于向用户请求在主机内执行脚本的权限。
- 用户同意后，在脚本所在位置执行脚本。
- 配置内的所有相对路径都以hdp包内的resource文件夹为基准路径。
- 步骤对象独有字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| parameters | object | - | TRUE | 定义步骤使用的特殊参数 |

- 参数具体字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| shell_path | string | - | TRUE | 待执行脚本的相对路径 |
| shell_parameters | array | - | FALSE | 指定脚本参数 |
| shell_info | array | - | FALSE | 脚本介绍信息 |

shell_parameters 可以指定多个参数为脚本执行时使用，可以指定前序`form`流程或`get_ha_access_token`流程中的key值作为参数传递。

结构示例：
``` yaml
step1:                                      
    step_type: run_shell_script              
    next_step: ''                       
    skip_to:  ''
    parameters:                               
      shell_path: script.sh  
      shell_parameters: [ "phone_number","home-assistant-token" ]
      shell_info: '生成Z2M配置文件'
```


### `run_shell_script_in_container` 类型
- `run_shell_script_in_container`类型步骤用于向用户请求在应用容器内执行脚本的权限。
- 用户同意后，在容器内的指定位置执行脚本。
- 配置内的所有相对路径都以hdp包内的resource文件夹为基准路径。
- 步骤对象独有字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| parameters | object | - | TRUE | 定义步骤使用的特殊参数 |

- 参数具体字段如下：

| 字段 | 数据类型 |默认值 | 必须项 | 说明  |
| :-----| ---- | :---- | :------- | :---- |
| shell_path | string | - | TRUE | 待执行脚本的相对路径 |
| run_path | string | - | TRUE | 指定执行脚本的容器内绝对路径 |
| shell_parameters | array | - | FALSE | 指定脚本参数 |
| shell_info | array | - | TRUE | 脚本介绍信息 |

shell_parameters 可以指定多个参数为脚本执行时使用，可以指定前序`form`流程或`get_ha_access_token`流程中的key值作为参数传递。

结构示例：
``` yaml
step1:                                      
    step_type: run_shell_script_in_container              
    next_step: ''                       
    skip_to:  ''
    parameters:                               
      shell_path: script.sh  
      run_path: "/var/local"
      shell_parameters: [ "phone_number","home-assistant-token" ]
      shell_info: '更换npm源'
```


## 配置文件的使用

- 准备好配置文件以后，保存为以`flow_config.yml`命名的文件。
- 在自定义安装弹出框，`应用初始化配置文件`栏点击`上传文件`，将此文件上传。
- 如果需要其他资源文件，例如HA集成、脚本等，在`资源文件`栏上传。
- 点击`安装`后，应用开始自动安装，安装完毕后，进入待配置状态。

![上传初始化配置文件和资源文件](/assets/image/houzzkit_docker_package_make/custom_install_upload_1.jpg)