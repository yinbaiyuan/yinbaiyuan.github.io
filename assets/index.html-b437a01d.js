import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as _,d as t,e as i,b as e,w as c,a as d,f as o}from"./app-f87b0ab3.js";const h="/assets/image/houzzkit/houzzkit_f1_show.jpg",p="/assets/image/started/houzzkit_started_step_1.jpg",u="/assets/image/started/houzzkit_started_step_2.jpg",g="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma.jpeg",z="/assets/image/started/houzzkit_started_step_3.jpg",m="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma_in_hole_close_up.jpeg",k="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma_close_up_sma.jpeg",f="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma_assemble.jpeg",b="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma_connect_wifi.jpeg",x="/assets/image/houzzkit/houzzkit_f1_ipex_to_sma_connect_zigbee.jpeg",v="/assets/image/houzzkit/houzzkit_f1_full_back_2.jpeg",Z="/assets/image/houzzkit/houzzkit_f1_cpu_fin_side.jpeg",y="/assets/image/houzzkit/houzzkit_f1_cpu_fin_covered.jpeg",O="/assets/image/houzzkit/houzzkit_f1_foot_pad.jpeg",w="/assets/image/started/houzzkit_started_step_4.jpg",U="/assets/image/houzzkit/houzzkit_f1_back_side.jpeg",j="/assets/image/houzzkit/houzzkit_f1_otg_wire.jpeg",H="/assets/image/started/houzzkit_started_step_5.jpg",R="/assets/image/started/houzzkit_started_step_6.jpg",D="/assets/image/started/houzzkit_started_step_7.jpg",N="/assets/image/started/houzzkit_started_step_8.jpg",A={},I=o('<h2 id="欢迎" tabindex="-1"><a class="header-anchor" href="#欢迎" aria-hidden="true">#</a> 欢迎</h2><figure><img src="'+h+'" alt="HOUZZKIT Force 1" tabindex="0" loading="lazy"><figcaption>HOUZZKIT Force 1</figcaption></figure><p><strong>HOUZZkit物联网智能中枢</strong>，可以帮助您快速搭建智能家居系统，实现智能家居的控制、管理、自动化等功能。</p><p>本文将带您快速了解 <strong>HOUZZkit智能中枢</strong> 的基本功能和使用方法。</p><div class="hint-container tip"><p class="hint-container-title">名词解释</p><ul><li><strong>HOUZZkit</strong>：一个智能家居解决方案，包含硬件设备、软件系统等。</li><li><strong>HOUZZKit OS</strong>：专为 HOUZZkit智能中枢 设计的操作系统，基于Linux，支持 Docker 容器技术，可运行各种智能家居软件。</li><li><strong>HOUZZkit Force 1</strong>：专为 HOUZZkit 设计的第一款硬件设备，包含主机、电源适配器等。</li></ul></div><h2 id="硬件准备" tabindex="-1"><a class="header-anchor" href="#硬件准备" aria-hidden="true">#</a> 硬件准备</h2><p>首次开箱 HOUZZkit Force 1 时，您需要进行简单的组装，具体步骤如下：</p><h3 id="安装天线" tabindex="-1"><a class="header-anchor" href="#安装天线" aria-hidden="true">#</a> 安装天线</h3><ul><li>使用随机附带的工具，拧开固定上盖的四条螺丝，并打开上盖。<br><img src="'+p+'" alt="" loading="lazy"></li><li>取下两个天线孔的橡胶堵头。<br><img src="'+u+'" alt="" loading="lazy"></li><li>取出随机附带的两个ipex转sma天线。<br><img src="'+g+'" alt="" loading="lazy"><br><img src="'+z+'" alt="" loading="lazy"><br><img src="'+m+'" alt="" loading="lazy"><br><img src="'+k+'" alt="" loading="lazy"><br><img src="'+f+'" alt="" loading="lazy"></li><li>将ipex头<strong>小</strong>一点的天线安装在wifi模组一侧的天线孔中。</li><li>将ipex头<strong>大</strong>一点的天线安装在zigbee模组一侧的天线孔中。</li><li>将ipex小头用力扣在wifi模组的<strong>1号</strong>天线接口上。<br><img src="'+b+'" alt="" loading="lazy"></li><li>将ipex大头用力扣在zigbee模组的天线接口上。<br><img src="'+x+'" alt="" loading="lazy"></li><li>将两个小辣椒天线拧好。<br><img src="'+v+'" alt="" loading="lazy"></li></ul><h3 id="安装散热硅胶垫" tabindex="-1"><a class="header-anchor" href="#安装散热硅胶垫" aria-hidden="true">#</a> 安装散热硅胶垫</h3><ul><li>将随机附带的散热硅胶垫贴两侧的透明塑料片<strong>去掉</strong>。<br><img src="'+Z+'" alt="" loading="lazy"></li><li>将散热硅胶垫贴在CPU上。<br><img src="'+y+'" alt="" loading="lazy"></li><li>将上盖盖回去，拧紧四条螺丝。</li></ul><h3 id="安装脚垫" tabindex="-1"><a class="header-anchor" href="#安装脚垫" aria-hidden="true">#</a> 安装脚垫</h3><ul><li>将随机附带的四个圆形橡胶脚垫贴在智能中枢的底部。<br><img src="'+O+'" alt="" loading="lazy"><br><img src="'+w+'" alt="" loading="lazy"></li></ul><h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2><h3 id="背部接口释义" tabindex="-1"><a class="header-anchor" href="#背部接口释义" aria-hidden="true">#</a> 背部接口释义</h3><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>AV：3.5mm音视频输出接口。</li><li>HDMI：HDMI视频输出接口。</li><li>LAN/WAN：1000Mbps 网口。<strong>有小电脑标志的为管理口，用来直连电脑。没有小电脑标志的为WAN口，用来连接路由器</strong>。</li><li>USB：上方接口为USB 3.0接口。</li><li>OTG/USB: 下方接口为USB 3.0接口。可以自适应OTG和HOSTS模式。</li><li>DC IN：电源接口，标准电压为直流12V，推荐最小电流为2A。</li></ul><div class="hint-container tip"><p class="hint-container-title">关于两个网口的说明</p><p>两个网口的硬件配置完全一致，但考虑到HOUZZkit智能中枢的主要使用场景，在软件上做了区分。<br> WAN口用来连接路由器，LAN口（有电脑标志）用来连接电脑。</p></div><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>',19),S=t("li",null,[t("p",null,"连接电源"),t("ul",null,[t("li",null,"将随机附带的电源适配器插入智能中枢的电源接口。"),t("li",null,"将电源适配器插入电源插座。")])],-1),T=t("li",null,[t("p",null,"连接网络"),t("ul",null,[t("li",null,"请将自备网线插入智能中枢的WAN网口（靠近电源接口的那个）。"),t("li",null,"将网线插入路由器的任意LAN网口。")])],-1),L=t("li",null,[t("p",null,"等待智能中枢启动完成，大约需要 1 分钟。")],-1),B=t("p",null,"通过浏览器访问并使用设备",-1),K=t("li",null,"打开任意一台连接同一路由器网络的电脑。",-1),C={href:"http://houzzkit.local",target:"_blank",rel:"noopener noreferrer"},V=t("h3",{id:"其他连接方案",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#其他连接方案","aria-hidden":"true"},"#"),i(" 其他连接方案")],-1),W=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"如果未能顺利打开网页，请尝试以下几种方式访问")],-1),F=t("p",null,[t("strong",null,"方法一")],-1),M=t("li",null,"使用网线将电脑直接连接到智能中枢的LAN网口（远离电源接口的那个）。",-1),P={href:"http://houzzkit.os",target:"_blank",rel:"noopener noreferrer"},E=o(`<p><strong>方法二</strong></p><ol><li>打开路由器后台，并找到连接到路由器的设备列表。</li><li>在列表中找到名称为houzzkit的设备。</li><li>记住设备的IP地址，例如<code>192.168.1.100</code>。</li><li>打开电脑，在浏览器中输入 <code>http://192.168.1.100</code>(此处只是举例，实际IP地址以实际情况为准)。</li></ol><p><strong>方法三</strong></p><ol><li>找一条HDMI线，将中枢和任意有HDMI接口的屏幕连接。</li><li>打开屏幕，切换到HDMI输入源。</li><li>确认网线已经正常连接路由器和中枢WAN口（靠近电源接口的那个）。</li><li>断开中枢电源，然后重新连接电源。</li><li>稍等片刻，屏幕上会显示如下字样：<div class="language-text" data-ext="text"><pre class="language-text"><code>You can access HOUZZKIT OS through a browser at http://192.168.1.100
</code></pre></div></li><li>打开电脑，在浏览器中输入 <code>http://192.168.1.100</code>(此处只是举例，实际IP地址以实际情况为准)。</li></ol><h2 id="固件刷新" tabindex="-1"><a class="header-anchor" href="#固件刷新" aria-hidden="true">#</a> 固件刷新</h2><p>如果因为某些严重的操作失误，导致系统无法正常使用，您可以通过刷新固件的方式恢复系统。</p>`,6),G={class:"hint-container tip"},Y=t("p",{class:"hint-container-title"},"固件下载地址",-1),q=t("br",null,null,-1),J={href:"https://pan.baidu.com/s/1uH4C5_rmPRciLv5-Yr_etw?pwd=8888",target:"_blank",rel:"noopener noreferrer"},Q=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("ol",null,[t("li",null,"刷机操作目前只可以在Windows操作系统下进行。"),t("li",null,"HOUZZkit Force 1 使用的核心芯片为瑞芯微的RK3568，故刷机采用瑞芯微官方提供的方案。"),t("li",null,"刷机需要打开设备上盖。")])],-1),X=t("h3",{id:"准备刷机环境",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#准备刷机环境","aria-hidden":"true"},"#"),i(" 准备刷机环境")],-1),$=t("br",null,null,-1),tt=t("br",null,null,-1),it=t("br",null,null,-1),et={href:"https://www.mediafire.com/file/ijail21i7h73d5o/Rockchip_DriverAssitant_v5.1.1.zip",target:"_blank",rel:"noopener noreferrer"},lt=t("br",null,null,-1),ot={href:"https://androiddatahost.com/wp-content/uploads/Rockchip_DriverAssitant_v5.1.1.zip",target:"_blank",rel:"noopener noreferrer"},st=t("br",null,null,-1),at=t("code",null,"DriverInstall.exe",-1),nt=t("br",null,null,-1),rt=t("br",null,null,-1),_t=t("br",null,null,-1),ct={href:"https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.86.zip",target:"_blank",rel:"noopener noreferrer"},dt=t("br",null,null,-1),ht={href:"https://meta.box.lenovo.com/v/link/view/02755469abfe4930a3425742d8d31ea2",target:"_blank",rel:"noopener noreferrer"},pt=o('<h3 id="将智能中枢刷固件" tabindex="-1"><a class="header-anchor" href="#将智能中枢刷固件" aria-hidden="true">#</a> 将智能中枢刷固件</h3><ol><li><p>使用随机附带的公对公USB OTG 线将智能中枢与刷机电脑连接<br><strong>智能中枢的 USB OTG 接口为靠近设备底部的USB口</strong>。<br><img src="'+j+'" alt="" loading="lazy"></p></li><li><p>将智能中枢电源接口接入电源。</p></li><li><p>进入刷机模式<br><img src="'+H+'" alt="" loading="lazy"></p><ul><li>按住智能中枢侧面的 <code>Recovery</code> 按钮不放。</li><li>按一下智能中枢侧面的 <code>Reset</code> 按钮。</li><li>等待5秒，松开 <code>Recovery</code> 按钮。</li><li>RKDevTool 软件下方，出现 <code>发现一个LOADER设备</code> 字样，表示进入刷机模式成功。<br><img src="'+R+'" alt="" loading="lazy"></li></ul></li><li><p>刷固件<br><img src="'+D+'" alt="" loading="lazy"></p><ul><li>点击 <code>升级固件</code> 页签。</li><li>点击 <code>固件</code> 按钮，并选择已经下载好的固件镜像。选择的固件文件名必须包含<code>FULL</code>字样。</li><li>等待30s左右，软件会读取固件相关信息并展示出来。</li><li>点击<code>升级</code>按钮，等待1-2分钟即可。<br><img src="'+N+'" alt="" loading="lazy"></li></ul></li></ol><p><strong>固件烧录完毕后，智能中枢会自动重启，稍等30s左右，即可通过浏览器访问智能中枢。</strong></p>',3);function ut(gt,zt){const l=s("ExternalLinkIcon"),a=s("RouterLink");return r(),_("div",null,[I,t("ol",null,[S,T,L,t("li",null,[B,t("ul",null,[K,t("li",null,[i("打开浏览器，输入 "),t("a",C,[i("http://houzzkit.local"),e(l)]),i("，进入智能中枢的欢迎界面。")])])]),t("li",null,[t("p",null,[i("在HOUZZkit OS中的具体操作，请参考 "),e(a,{to:"/houzzkitos/"},{default:c(()=>[i("HOUZZkit OS 文档")]),_:1})])])]),V,W,F,t("ol",null,[M,t("li",null,[i("打开电脑，在浏览器输入"),t("a",P,[i("http://houzzkit.os"),e(l)]),i("，即可进入智能中枢的欢迎界面。")])]),E,t("div",G,[Y,t("p",null,[i("固件比较大，目前发布在以下地址，请大家选择版本下载，一般选择最新版本即可。"),q,i(" 地址一："),t("a",J,[i("百度网盘"),e(l)])])]),Q,X,t("ol",null,[t("li",null,[t("p",null,[i("安装驱动程序"),$,i(" 下载 Rockchip Driver Assistant ，当前最新版本为 5.1.1 。"),tt,i(" 提供几个下载链接，任意下载一个即可。"),it,t("a",et,[i("www.mediafire.com"),e(l)]),lt,t("a",ot,[i("androiddatahost.com"),e(l)]),st,i(" 下载后，解压缩，打开文件夹，双击 "),at,i("，安装驱动程序。")])]),t("li",null,[t("p",null,[i("安装刷机程序"),nt,i(" 下载 RKDevTool on Windows ，本教程使用的版本为 v2.86。 v.2.8x v.2.9x版本都行"),rt,i(" 提供几个下载链接，任意下载一个即可。"),_t,t("a",ct,[i("RKDevTool_Release_v2.86-CN"),e(l)]),dt,t("a",ht,[i("RKDevTool_Release_v2.84-CN"),e(l)])])])]),pt,d(` ## 目录

- [快速上手子页面](started.md)

- [页面展示](page.md)

- [禁用展示](disable.md)

- [加密展示](encrypt.md)

- [测试页面](mydoc.md) `)])}const ft=n(A,[["render",ut],["__file","index.html.vue"]]);export{ft as default};
