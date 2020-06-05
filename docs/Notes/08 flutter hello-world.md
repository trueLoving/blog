---
title: Flutter hello_world
categories:
 -  笔记
tags:
 - 笔记
date: 2020-06-06
---

:::tip

flutter是一个android和ios开发的跨平台框架,主要使用的语言为dart

安装环境的操作系统为windows

此文章只是按照官网教程从零搭建flutter环境,最后跑起helloworld

此文章只是简单的阐述安装步骤,具体请看官方文档

:::

<!-- more -->

安装步骤大致如下

1. 安装flutter sdk

2. 安装模拟器(这里我们直接安装android studio来实现)

3. 选择编辑器来编写代码

4. 项目的初步创建和运行


## 1. 安装flutter sdk

1. 下载flutter.zip压缩包,解压

2. 将flutter_root/bin添加到windows的环境变量中

3. 最终打开cmd,输入命令 flutter doctor查看运行效果

## 2. 安装android studio

1. 下载并安装 Android Studio

2. 配置Android Studio,配置Android模拟器

3. 打开cmd,运行flutter run 查看flutter可连接的设备

## 3. 选择编辑器,在这里我选择vscode

1. 安装flutter & dart插件

2. 调用View>Command Palette调用命令,输入flutter doctor 查看配置是否有问题

## 4. 项目的初步创建和运行

1. 启动vscode

2. 调用View>Command Palette调用命令,输入Flutter: New Project 

3. 选择项目目录

4. 等待项目创建完成

5. 按 F5 键或调用Debug>Start Debugging,会弹出调用设置,选中调用设备,并启动

6. 等待程序启动,一切正常的话会在模拟器上显示Hello World

## 注意点

1. 项目路径不要包含中文

2. 当添加一个新的依赖时要重启项目才能使用引入的依赖


