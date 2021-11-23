---
title: docker的使用
categories:
 - 工具
tags:
 - 工具
date: 2020-06-01
---


:::tip

今天在服务器安装mysql时,想尝试用docker安装,于是就去了解了一下docker的常用命令

:::


<!-- more -->

## 常用命令

|               命令                |              含义              |
| :-------------------------------: | :----------------------------: |
|           docker images           |        查看当前本地镜像        |
|    docker images -a --digests     |     查看本地镜像的具体信息     |
|       docker search 软件名        | 查看远程仓库软件镜像的相关信息 |
|        docker container ls        |      查看当前已创建的容器      |
| docker container stop containerId |    根据容器id停止容器的运行    |
|  docker container rm containerId  |       根据容器id删除容器       |
|             docker ps             |     查看当前正在运行的容器     |
|           docker ps -a            |     查看已经停止运行的容器     |
|    docker exec -it 容器名 bash    |     进入指定容器的bash空间     |

## docker run命令详解

docker run [options] IMAGE [COMMAND] [ARG...]

1. -p 本地端口/容器端口  端口映射
2. --name 容器命名
3. -e  容器初始配置参数
4. -v  主机目录/容器目录  主机和容器的目录映射关系 

## docker安装mysql

1. 拉去mysql镜像

docker pull mysql 

2. 创建基于mysql镜像的容器

docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql

3. 进入容器空间使用mysql

docker exec -it mysql bash

mysql -u root -p 进入mysql