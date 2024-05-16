import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c as d,d as e,e as o,b as l,w as _,f as n}from"./app-080a317b.js";const c="/assets/image/houzzkit/houzzkit_f1_otg_wire.jpeg",h="/assets/image/started/houzzkit_f1_right_side_2.jpg",u="/assets/image/started/houzzkit_started_step_6.jpg",p="/assets/image/started/houzzkit_started_step_7.jpg",m="/assets/image/started/houzzkit_started_step_8.jpg",b="/assets/image/started/houzzkit_started_step_10.jpg",x={},f=e("h2",{id:"注意",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),o(" 注意")],-1),g=e("p",null,"HOUZZkit 设备的固件为基于硬件特殊定制的固件，HOUZZkit固件不可用于其他设备，其他第三方的设备也不可用于HOUZZkit硬件。否则会有损坏设备芯片的风险。",-1),k=e("h2",{id:"固件烧录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#固件烧录","aria-hidden":"true"},"#"),o(" 固件烧录")],-1),v=e("p",null,"如果因为某些严重的操作失误，导致系统无法正常使用，您可以通过刷新固件的方式恢复系统。",-1),z={class:"hint-container tip"},w=e("p",{class:"hint-container-title"},"固件下载地址",-1),R=e("br",null,null,-1),B={href:"https://pan.baidu.com/s/1uH4C5_rmPRciLv5-Yr_etw?pwd=8888",target:"_blank",rel:"noopener noreferrer"},E=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("ol",null,[e("li",null,"刷机操作目前只可以在Windows操作系统下进行。"),e("li",null,"HOUZZkit 蓝精灵 使用的核心芯片为瑞芯微的RK3568，故刷机采用瑞芯微官方提供的方案。")])],-1),D=e("h3",{id:"准备刷机环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备刷机环境","aria-hidden":"true"},"#"),o(" 准备刷机环境")],-1),L=e("br",null,null,-1),A=e("br",null,null,-1),y=e("br",null,null,-1),T={href:"https://www.mediafire.com/file/ijail21i7h73d5o/Rockchip_DriverAssitant_v5.1.1.zip",target:"_blank",rel:"noopener noreferrer"},U=e("br",null,null,-1),Z={href:"https://androiddatahost.com/wp-content/uploads/Rockchip_DriverAssitant_v5.1.1.zip",target:"_blank",rel:"noopener noreferrer"},j=e("br",null,null,-1),O=e("code",null,"DriverInstall.exe",-1),C=e("br",null,null,-1),H=e("br",null,null,-1),K=e("br",null,null,-1),N={href:"https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.86.zip",target:"_blank",rel:"noopener noreferrer"},S=e("br",null,null,-1),V={href:"https://meta.box.lenovo.com/v/link/view/02755469abfe4930a3425742d8d31ea2",target:"_blank",rel:"noopener noreferrer"},I=n('<h3 id="为智能中枢刷固件" tabindex="-1"><a class="header-anchor" href="#为智能中枢刷固件" aria-hidden="true">#</a> 为智能中枢刷固件</h3><ol><li><p>使用随机附带的公对公USB OTG 线将智能中枢与刷机电脑连接<br><strong>智能中枢的 USB OTG 接口为靠近设备底部的USB口</strong>。<br><img src="'+c+'" alt="" loading="lazy"></p></li><li><p>将智能中枢电源接口接入电源。</p></li><li><p>进入刷机模式<br><img src="'+h+'" alt="" loading="lazy"></p><ul><li>准备两个曲别针掰直了。</li><li>用曲别针捅进去智能中枢侧面的 <code>Recovery</code> 按钮不放。</li><li>用另一个曲别针捅一下智能中枢侧面的 <code>Reset</code> 按钮。</li><li>等待5秒，松开 <code>Recovery</code> 按钮。</li><li>RKDevTool 软件下方，出现 <code>发现一个LOADER设备</code> 字样，表示进入刷机模式成功。<br><img src="'+u+'" alt="" loading="lazy"></li></ul></li><li><p>刷固件<br><img src="'+p+'" alt="" loading="lazy"></p><ul><li>点击 <code>升级固件</code> 页签。</li><li>点击 <code>固件</code> 按钮，并选择已经下载好的固件镜像。选择的固件文件名必须包含<code>FULL</code>字样。</li><li>等待30s左右，软件会读取固件相关信息并展示出来。</li><li>点击<code>升级</code>按钮，等待1-2分钟即可。<br><img src="'+m+'" alt="" loading="lazy"></li></ul></li></ol><p><strong>固件烧录完毕后，智能中枢会自动重启，稍等30s左右，即可通过浏览器访问智能中枢。</strong></p><h2 id="烧录bootloader和linux-kernel" tabindex="-1"><a class="header-anchor" href="#烧录bootloader和linux-kernel" aria-hidden="true">#</a> 烧录bootloader和Linux kernel</h2><p>如果因为某些原因，只需要烧录bootloader或者linux内核镜像，可以使用以下办法。</p>',5),G={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"提示",-1),W=e("p",null,[o("刷机环境："),e("br"),o(" 完全按照"),e("code",null,"固件烧录"),o("的刷机环境准备即可")],-1),Y=e("br",null,null,-1),F=e("br",null,null,-1),q=e("br",null,null,-1),J={href:"https://pan.baidu.com/s/1uH4C5_rmPRciLv5-Yr_etw?pwd=8888",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"烧录步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#烧录步骤","aria-hidden":"true"},"#"),o(" 烧录步骤")],-1),Q=n('<li>烧录分区<br><img src="'+b+'" alt="" loading="lazy"><ul><li>点击<code>下载镜像</code>页签</li><li>在表格控件的空白区域右击，选择<code>添加项</code></li><li>烧录bootloader <ul><li>将地址改为 0x00004000</li><li>将名字改为 uboot</li><li>路径选择 bootloader 镜像文件</li><li>确认勾选行首复选框</li></ul></li><li>烧录linux kernel <ul><li>将地址改为 0x00008000</li><li>将名字改为 boot</li><li>路径选择 linux kernel 镜像文件</li><li>确认勾选行首复选框</li></ul></li><li>点击<code>执行</code> ，开始烧录</li><li>如果提示失败，可以勾选<code>强制按地址写</code>后再试</li></ul></li>',1);function X($,ee){const t=i("ExternalLinkIcon"),r=i("RouterLink");return a(),d("div",null,[f,g,k,v,e("div",z,[w,e("p",null,[o("固件比较大，目前发布在以下地址，请大家选择版本下载，一般选择最新版本即可。"),R,o(" 地址一："),e("a",B,[o("百度网盘"),l(t)])])]),E,D,e("ol",null,[e("li",null,[e("p",null,[o("安装驱动程序"),L,o(" 下载 Rockchip Driver Assistant ，当前最新版本为 5.1.1 。"),A,o(" 提供几个下载链接，任意下载一个即可。"),y,e("a",T,[o("www.mediafire.com"),l(t)]),U,e("a",Z,[o("androiddatahost.com"),l(t)]),j,o(" 下载后，解压缩，打开文件夹，双击 "),O,o("，安装驱动程序。")])]),e("li",null,[e("p",null,[o("安装刷机程序"),C,o(" 下载 RKDevTool on Windows ，本教程使用的版本为 v2.86。 v.2.8x v.2.9x版本都行"),H,o(" 提供几个下载链接，任意下载一个即可。"),K,e("a",N,[o("RKDevTool_Release_v2.86-CN"),l(t)]),S,e("a",V,[o("RKDevTool_Release_v2.84-CN"),l(t)])])])]),I,e("div",G,[P,W,e("p",null,[o("固件下载："),Y,o(" 文件名为 houzzkitos_firmware_uboot_xxxxxxxxxx.img 的文件为bootloader镜像。"),F,o(" 文件名为 houzzkitos_firmware_kernel_xxxxxxxxxx.img 的文件为linux内核镜像。"),q,o(" 地址一："),e("a",J,[o("百度网盘"),l(t)])])]),M,e("ol",null,[e("li",null,[o("按照上述方式"),l(r,{to:"/firmware/firmware.html#%E4%B8%BA%E6%99%BA%E8%83%BD%E4%B8%AD%E6%9E%A2%E5%88%B7%E5%9B%BA%E4%BB%B6"},{default:_(()=>[o("进入刷机模式")]),_:1}),o("。")]),Q])])}const te=s(x,[["render",X],["__file","firmware.html.vue"]]);export{te as default};