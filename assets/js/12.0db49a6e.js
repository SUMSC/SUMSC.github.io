(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{252:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("最近把家里的旧电脑换了 redhat 做服务器，因为没有家里公网 ip，就用 frp 实现了内网穿透")]),a._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),t("p",[a._v("一台有公网 ip 的电脑\n一台能上网的机子")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("这里以 0.20.0 版本为例\n"),t("a",{attrs:{href:"https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz"),t("OutboundLink")],1),a._v("\n其他的 release 参见"),t("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/fatedier/frp/releases"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_a    md64.tar.gz\n")])])]),t("p",[a._v("下载后解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf frp_0.20.0_linux_amd64.tar.gz\n")])])]),t("h3",{attrs:{id:"服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端","aria-hidden":"true"}},[a._v("#")]),a._v(" 服务端")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" frp_0.20.0_linux_amd64\n")])])]),t("p",[a._v("编辑配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" frps.ini\n")])])]),t("p",[a._v("修改地址和端口")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[common]\nvhost_http_port = 8080\nbind_port = 7000\n\n[web]\ntype = http\ncustom_domains = your.domains\n")])])]),t("p",[a._v("确保你的服务器开启的你填的端口并且没有被占用")]),a._v(" "),t("h3",{attrs:{id:"客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),t("p",[a._v("同样下载解压之后编辑 frpc.ini")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" frpc.ini\n")])])]),t("p",[a._v("配置文件内容如下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[common]\nserver_addr = your.server.address\nserver_port = 7000\n\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n")])])]),t("p",[a._v("之后运行就 ok 了")]),a._v(" "),t("h2",{attrs:{id:"可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选","aria-hidden":"true"}},[a._v("#")]),a._v(" 可选")]),a._v(" "),t("p",[a._v("将 frps 写入系统服务(frpc 只要将下面所有的 frps 换成 frpc 即可)\n先移动文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" frps /usr/bin\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /etc/frp\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" frps.ini /etc/frp\n")])])]),t("p",[a._v("之后是写服务文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/systemd/system/frps.service\n")])])]),t("p",[a._v("文件如下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[Unit]\nDescription=frps daemon\nAfter=network.target syslog.target\nWants=network.target\n\n[Service]\nType=simple\n#启动服务的命令（此处xxx换做你的实际安装目录）\nExecStart=/usr/bin/frps -c /etc/frps/frps.ini\nRestart= always\nRestartSec=1min\nExecStop=/usr/bin/killall frps\n\n[Install]\nWantedBy=multi-user.target\n")])])]),t("p",[a._v("这样我们就可以用 systemed 进行控制并且开机启动")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("enable")]),a._v(" frps\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start frps\n")])])]),t("p",[a._v("这样我们就可以偷(yu)税(kuai)地进行内网穿透了！")])])},[],!1,null,null,null);s.default=r.exports}}]);