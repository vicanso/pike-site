---
id: installation
title: 安装
permalink: docs/installation.html
prev: how-to-start.html
next: config.html
---

Pike提供windows, macos与linux三个版本的执行文件，以及docker镜像

Pike编译生成的执行文件可在项目主页[pike](https://github.com/vicanso/pike)中的[releases](https://github.com/vicanso/pike/releases)中下载您需要的版本。

推荐大家使用已打包好的docker镜像(不到20MB）的形式，只需要以下简单的几步则可:

```bash
docker pull vicanso/pike

docker -d --restart=always -p 3015:3015 -v ./config.yml:/etc/pike/config.yml vicanso/pike
```
