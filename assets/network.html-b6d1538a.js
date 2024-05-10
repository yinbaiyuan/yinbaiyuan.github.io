import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as s}from"./app-da5b08fa.js";const d={},n=s(`<h2 id="q-如何通过wifi连接到路由器" tabindex="-1"><a class="header-anchor" href="#q-如何通过wifi连接到路由器" aria-hidden="true">#</a> Q: 如何通过Wifi连接到路由器？</h2><p>A: 目前，HOUZZkit OS 暂不支持通过UI来管理wifi设备（研发中）。可以通过以下终端命令来实现wifi连接。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo nmcli device wifi connect {ssid} password {password} ifname wlan0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，{ssid} 和 {password} 需要修改为目标网络的SSID和密码。（大括号不保留）<br> 断开wifi连接，可以执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo nmcli dev dis wlan0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="q-如何修改静态ip地址" tabindex="-1"><a class="header-anchor" href="#q-如何修改静态ip地址" aria-hidden="true">#</a> Q: 如何修改静态IP地址？</h2><p>A: 目前，HOUZZkit OS 暂不支持通过UI来修改IP地址（研发中）。可以通过以下方法来实现修改静态IP。</p><ul><li>在HOUZZkit OS的桌面上点开终端应用。</li><li>输入以下命令打开配置文件。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vi /etc/network/interfaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>按 i 键，进入编辑状态。在文件结尾另起一行，输入以下内容:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>auto eno0
iface eno0 inet static
address 192.168.1.100
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 114.114.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中所有涉及到的IP请根据您的实际情况修改。</p><ul><li>按 esc 键退出编辑状态。输入:wq ，保存并退出文件。</li><li>输入以下命令，重启系统即可。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="q-如何搭建samba服务" tabindex="-1"><a class="header-anchor" href="#q-如何搭建samba服务" aria-hidden="true">#</a> Q: 如何搭建SAMBA服务？</h2><p>A: 目前，HOUZZkit OS 暂不支持通过UI来搭建SAMBA服务（研发中）。可以通过以下方法来实现。</p><ul><li>在HOUZZkit OS的桌面上点开终端应用。</li><li>执行以下命令安装samba服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install samba samba-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在期望的目录下创建共享到内网的文件夹。比如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /home/yinbaiyuan/UNIVERSAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>打开SAMBA服务配置文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/samba/smb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>按 i 键，进入编辑状态，在文件结尾另起一行，输入以下内容：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[UNIVERSAL]
path = /home/yinbaiyuan/UNIVERSAL
available = yes
browseable = yes             
public = yes               
writable = yes             
valid users = yinbaiyuan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有涉及到目录路径，用户名的地方，请根据实际情况修改。</p><ul><li>按 esc 键退出编辑状态。输入:wq ，保存并退出文件。</li><li>输入以下命令，设置访问SAMBA服务的用户名和密码。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo smbpasswd -a yinbaiyuan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，yinbaiyuan为用户名，请根据实际情况修改。</p><ul><li>输入以下命令，重启smb服务器。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo /etc/init.d/smbd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),l=[n];function t(r,u){return i(),a("div",null,l)}const m=e(d,[["render",t],["__file","network.html.vue"]]);export{m as default};
