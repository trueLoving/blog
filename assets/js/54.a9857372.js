(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{360:function(t,e,r){"use strict";r.r(e);var a=r(2),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",[t._v("今天在服务器安装mysql时,想尝试用docker安装,于是就去了解了一下docker的常用命令")])]),t._v(" "),r("h2",{attrs:{id:"常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker images")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看当前本地镜像")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker images -a --digests")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看本地镜像的具体信息")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker search 软件名")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看远程仓库软件镜像的相关信息")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker container ls")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看当前已创建的容器")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker container stop containerId")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("根据容器id停止容器的运行")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker container rm containerId")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("根据容器id删除容器")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker ps")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看当前正在运行的容器")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker ps -a")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("查看已经停止运行的容器")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("docker exec -it 容器名 bash")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("进入指定容器的bash空间")])])])]),t._v(" "),r("h2",{attrs:{id:"docker-run命令详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-run命令详解"}},[t._v("#")]),t._v(" docker run命令详解")]),t._v(" "),r("p",[t._v("docker run [options] IMAGE [COMMAND] [ARG...]")]),t._v(" "),r("ol",[r("li",[t._v("-p 本地端口/容器端口  端口映射")]),t._v(" "),r("li",[t._v("--name 容器命名")]),t._v(" "),r("li",[t._v("-e  容器初始配置参数")]),t._v(" "),r("li",[t._v("-v  主机目录/容器目录  主机和容器的目录映射关系")])]),t._v(" "),r("h2",{attrs:{id:"docker安装mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker安装mysql"}},[t._v("#")]),t._v(" docker安装mysql")]),t._v(" "),r("ol",[r("li",[t._v("拉去mysql镜像")])]),t._v(" "),r("p",[t._v("docker pull mysql")]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("创建基于mysql镜像的容器")])]),t._v(" "),r("p",[t._v("docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql")]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("进入容器空间使用mysql")])]),t._v(" "),r("p",[t._v("docker exec -it mysql bash")]),t._v(" "),r("p",[t._v("mysql -u root -p 进入mysql")])])}),[],!1,null,null,null);e.default=c.exports}}]);