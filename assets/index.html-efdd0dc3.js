import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c,d as t,e as i,b as l,w as h,f as o}from"./app-da5b08fa.js";const d="/assets/image/houzzkit/houzzkit_f1_show.jpg",u="/assets/image/houzzkit/houzzkit_f1_back_side.jpeg",p={},_=o('<h2 id="欢迎" tabindex="-1"><a class="header-anchor" href="#欢迎" aria-hidden="true">#</a> 欢迎</h2><figure><img src="'+d+'" alt="HOUZZkit 蓝精灵" tabindex="0" loading="lazy"><figcaption>HOUZZkit 蓝精灵</figcaption></figure><p><strong>HOUZZkit智能家居中枢</strong>，可以帮助您快速搭建智能家居系统。可以将不同品牌的设备接入到中枢，也可以将已经接入的设备桥接到其他智能家居生态（Homekit，米家等）。实现多品牌设备的统一控制、管理、自动化。</p><p>本文将带您快速了解 <strong>HOUZZkit智能家居中枢</strong> 的基本功能和使用方法。</p><div class="hint-container tip"><p class="hint-container-title">名词解释</p><ul><li><strong>HOUZZkit</strong>：一个智能家居解决方案，包含硬件设备、软件系统等。</li><li><strong>HOUZZKit OS</strong>：专为 HOUZZkit智能中枢 设计的操作系统，基于Linux，支持 Docker 容器技术，可运行各种智能家居软件。</li><li><strong>HOUZZkit 蓝精灵</strong>：专为 HOUZZkit 设计的第一款硬件设备，包含主机、电源适配器等。</li></ul></div><h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2><h3 id="背部接口释义" tabindex="-1"><a class="header-anchor" href="#背部接口释义" aria-hidden="true">#</a> 背部接口释义</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>AV：3.5mm音视频输出接口。</li><li>HDMI：HDMI视频输出接口。</li><li>WAN/LAN：1000Mbps 网口。<strong>靠近HDMI接口的为管理口，用来直连电脑。靠近USB接口的为WAN口，用来连接路由器</strong>。</li><li>USB：上方接口为USB 3.0接口。</li><li>OTG/USB: 下方接口为USB 3.0接口。可以自适应OTG和HOSTS模式。设备刷机必须要连此USB口。</li><li>DC IN：电源接口，标准电压为直流12V，推荐最小电流为2A。</li></ul><div class="hint-container tip"><p class="hint-container-title">关于两个网口的说明</p><p>两个网口的硬件配置完全一致，但考虑到HOUZZkit智能中枢的主要使用场景，在软件上做了区分。<br> WAN口（靠近USB接口）用来连接路由器，LAN口（靠近HDMI接口）用来连接电脑。</p></div><h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>',11),g=t("li",null,[t("p",null,"连接电源"),t("ul",null,[t("li",null,"将随机附带的电源适配器插入智能中枢的电源接口。"),t("li",null,"将电源适配器插入电源插座。")])],-1),k=t("li",null,[t("p",null,"连接网络"),t("ul",null,[t("li",null,"请将自备网线插入智能中枢的WAN网口（靠近USB接口那个）。"),t("li",null,"将网线插入路由器的任意LAN网口。")])],-1),f=t("li",null,[t("p",null,"等待智能家居中枢启动完成，大约需要 1 分钟。")],-1),Z=t("p",null,"通过浏览器访问并使用设备",-1),H=t("li",null,"打开任意一台连接同一路由器网络的电脑。",-1),z={href:"http://houzzkit.local",target:"_blank",rel:"noopener noreferrer"},O=t("h3",{id:"其他连接方案",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#其他连接方案","aria-hidden":"true"},"#"),i(" 其他连接方案")],-1),U=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"如果未能顺利打开网页，请尝试以下几种方式访问")],-1),x=t("p",null,[t("strong",null,"方法一")],-1),m=t("li",null,"使用网线将电脑直接连接到智能中枢的LAN网口（靠近HDMI的那个）。",-1),N={href:"http://houzzkit.os",target:"_blank",rel:"noopener noreferrer"},S=o(`<p><strong>方法二</strong></p><p>NOTE: 确认电脑网线连接路由器，中枢的WAN口也连接路由器。</p><ol><li>打开路由器后台，并找到连接到路由器的设备列表。</li><li>在列表中找到名称为houzzkit的设备。</li><li>记住设备的IP地址，例如<code>192.168.1.100</code>。</li><li>打开电脑，在浏览器中输入 <code>http://192.168.1.100</code>(此处只是举例，实际IP地址以实际情况为准)。</li></ol><p><strong>方法三</strong></p><p>NOTE: 确认电脑网线连接路由器，中枢的WAN口也连接路由器。</p><ol><li>找一条HDMI线，将中枢和任意有HDMI接口的显示器连接。</li><li>打开显示器，切换到HDMI输入源。</li><li>确认网线已经正常连接路由器和中枢WAN口（靠近USB的那个）。</li><li>断开中枢电源，然后重新连接电源。</li><li>稍等片刻，显示器上会显示如下字样：<div class="language-text" data-ext="text"><pre class="language-text"><code>You can access HOUZZKIT OS through a browser at http://192.168.1.100
</code></pre></div></li><li>打开电脑，在浏览器中输入 <code>http://192.168.1.100</code>(此处只是举例，实际IP地址以实际情况为准)。</li></ol>`,6);function I(b,A){const e=n("ExternalLinkIcon"),a=n("RouterLink");return r(),c("div",null,[_,t("ol",null,[g,k,f,t("li",null,[Z,t("ul",null,[H,t("li",null,[i("打开浏览器，输入 "),t("a",z,[i("http://houzzkit.local"),l(e)]),i("，进入智能中枢的欢迎界面。")])])]),t("li",null,[t("p",null,[i("在HOUZZkit OS中的具体操作，请参考 "),l(a,{to:"/houzzkitos/"},{default:h(()=>[i("HOUZZkit OS 文档")]),_:1})])])]),O,U,x,t("ol",null,[m,t("li",null,[i("打开电脑，在浏览器输入"),t("a",N,[i("http://houzzkit.os"),l(e)]),i("，即可进入智能中枢的欢迎界面。")])]),S])}const D=s(p,[["render",I],["__file","index.html.vue"]]);export{D as default};
