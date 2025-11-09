---
title: 下载
icon: download
category:
  - 指南
  - 下载
  - 生态
---

# 下载 TouchFish

欢迎下载 TouchFish！根据您的需求和平台，可以选择不同的发行版本。

## 版本选择指南

TouchFish 拥有多个发行版本，各有特色：

- **LTS** - 官方根版本，功能完善，稳定可靠
- **CLI** - 命令行版本，随官方，适合无 UI 界面的 Linux 服务器
- **Astra** - 全平台支持，UI 精美，支持 Markdown 和 LaTeX
- **UI Remake (TFUR)** - 现代化 UI，支持 Markdown、代码高亮和部分 LaTeX
- **Pro** - 支持 Markdown 和 LaTeX，有用户高亮功能
- **More (Lite)** - 更好的性能，更快的下载速度
- **Plus** - 有更多功能（不兼容）
- **For Android** - 安卓移动端（已不推荐）
- **TouchMouse** - 基于 TouchFish 的聊天项目，进行优化和改进（不兼容）

### 其他版本

- **Cloud Studio Chat (CSC)** - 高性能聊天软件，使用 C++ 编写，兼容性强（不兼容）

## 推荐配置

| 使用场景 | 推荐版本 |
|:---:|:---:|
| 追求功能完善 | LTS |
| 追求 UI 美观 | Astra 或 UI Remake |
| 追求性能速度 | More (Lite) |
| 服务器运行 | CLI |
| 移动设备 | Astra |
| Markdown 支持 | Astra, TFUR, Pro |
| 全平台兼容 | Astra |

## 各版本下载

### LTS (官方版) (包含CLI版本)

**支持平台：** Windows, MacOS, Linux (需 UI)

**特点：** 根版本，功能完善，与兼容版本互通

**下载地址：**
- [GitHub Releases](https://github.com/2044-space-elevator/TouchFish/releases)

**平台**
- Windows
- MacOS
- Linux（GUI版需图形界面发行版）

**包含组件：**
- `chat.exe` / `chat` - 服务器端
- `client.exe` / `client` - 客户端
- `admin.exe` / `admin` - 管理员端
- `clientcli.exe` / `clientcli` - CLI 客户端(即CLI版本)

包含服务端/客户端

详细说明见: [LTS 版本说明](./download.html#平台特殊说明) [Wiki](https://github.com/2044-space-elevator/TouchFish/wiki) 以及站点其他文档

---

### UI Remake (TFUR)

**支持平台：** Windows, MacOS (需自行编译), Linux (需 UI 发行版 + 自行编译)

**特点：** 现代化 UI，支持 Markdown、代码高亮、部分 LaTeX

**下载地址：**
- [GitHub Releases](https://github.com/pztsdy/touchfish_ui_remake/releases)

**平台**
- Windows
- MacOS（需自行编译/打包）
- Linux（需图形界面发行版）（需自行编译/打包）

仅包含客户端

---

### Astra

**支持平台：** Windows, MacOS, Linux, Android, iOS, Web

**特点：** 全平台兼容，UI 精美，支持 Markdown 和 LaTeX

**下载地址：**
- [GitHub Releases](https://github.com/ILoveScratch2/TouchFish-Astra/releases)


**平台**
- Windows
- MacOS
- Linux（需图形界面发行版）
- Android

仅包含客户端

---

### Pro


**特点：** 支持 Markdown，有能凑合着看的 LaTeX，用户高亮 （无预编译/打包二进制文件）


**下载地址：**
- [GitHub 源码](https://github.com/PigeonTechGroup/TouchFishPro/)

**平台**
- Windows（需自行编译/打包）
- MacOS（需自行编译/打包）
- Linux（需自行编译/打包）

---

### More (Lite)

**支持平台：** Windows, MacOS, Linux (需 UI)

**特点：** 更好的性能，更快的下载速度（镜像站）

**下载地址：**
- [Gitee 仓库](https://gitee.com/xx2870/touchfish_more/releases)

**平台**
- Windows（有待查证/补充）
- MacOS（有待查证/补充）
- Linux (需图形界面发行版) 

---


### Plus （不兼容）


**特点：** 更多功能扩展

**下载地址：**
- [GitHub Releases](https://github.com/2044-space-elevator/TouchFishPlus/releases)

**平台**
- Windows（需自行编译/打包）
- MacOS（需自行编译/打包）
- Linux（需自行编译/打包）

**注意：** 不同 Plus 版本之间不兼容，且与 LTS 不兼容

---

### For Android（移动端）

**支持平台：** Android

**特点：** 移动端支持，但容易被国产安卓杀进程

**下载地址：**
- [官方网站](https://www.piaoztsdy.cn/TouchFish-for-Android/)

**平台**
- Android

**重要提示：** 不建议使用此版本，建议使用 Astra 版本的 Android 端

---

### TouchMouse（不兼容）


**特点：** 基于 TouchFish 的聊天项目，优化GUI，添加大量功能

**平台**
- Windows

**注意：** 与 LTS 不兼容

---

### 相关项目

### Cloud Studio Chat (CSC) （不兼容）

如果您追求性能和兼容性，也可以尝试 [Cloud Studio Chat (CSC)](https://github.com/pztsdy/Cloud-Studio-Chat)，这是一个使用 C++ 编写的高性能聊天软件，能在 32 位 XP 上运行，拥有 TouchFish 的大部分功能。



## 平台特殊说明

> 此部分针对LTS版本

### Windows 用户

::: warning Windows 7 用户注意
如果您使用 Windows 7 或更低版本系统，可能需要额外安装 DLL 文件才能正常运行。
:::

大部分版本都提供了预编译的 `.exe` 文件，下载后可直接运行。

### MacOS 用户

::: warning 安全设置
该软件需要打开任意来源以正常运行：

1. 打开 **系统设置**
2. 进入 **安全性与隐私** → **安全性**
3. 在 **允许以下来源的应用程序** 中点击 `App Store 与已知开发者`
4. 选择 **任何来源**
:::

部分版本需要自行编译，请参考各版本的 GitHub 页面说明。

### Linux 用户

::: warning UI 要求
大部分版本仅支持在具有 UI 界面的 Linux 发行版中运行。

如需在无 UI 界面的 Linux 发行版中运行，请使用 **CLI 版本**。
:::

大部分版本需要自行编译或使用 Python 源码运行。

---

## 源码运行

如果您的平台没有预编译包，可以通过 Python 运行源码：

### 安装依赖

```bash
# Windows
pip install -r requirements.txt

# Linux
pip install -r requirements_linux.txt
```

### 运行服务器端
```bash
python chat.py
```

### 运行客户端
```bash
python client.py
```

### 运行 CLI 客户端
```bash
python clientcli.py
```

### 运行管理员端
```bash
python admin.py
```

---

## 版本兼容性说明

**兼容版本：** LTS, CLI, UI Remake, Pro, More, For Android, Astra

这些版本之间可以互相连接，服务器端和客户端可以使用不同的兼容版本。

**不兼容版本：** Plus, TouchMouse

Plus 版本不与其他版本兼容，且不同 Plus 版本之间也不兼容。
TouchMouse 版本也不与LTS兼容。


---

## 下载问题？

如果您在下载或安装过程中遇到问题，请：

1. 查看各版本的 GitHub Issues
2. 阅读 [Wiki 文档](https://github.com/2044-space-elevator/TouchFish/wiki)
3. 加入社区寻求帮助

::: tip 贡献者注意
感谢您对 TouchFish 的贡献！在开始贡献前，请先阅读 [贡献者须知](https://github.com/2044-space-elevator/TouchFish/blob/main/CONTRIBUTING.md)，防止您的努力打水漂。
:::
