---
title: 管理员命令
icon: shield-alt
category:
  - 文档
  - 命令参考
---

# 管理员客户端命令参考

本文档详细说明 TouchFish 管理员客户端（`admin`）的所有可用命令。

## 管理员客户端简介

管理员客户端用于远程管理 TouchFish 服务器，需要服务器端开启管理员模式并授权 IP 地址。

### 连接方式

```bash
# Windows
admin.exe

# Linux/macOS
./admin
# 或
python admin.py
```

连接时需要提供：
- **服务器 IP**：服务器的 IP 地址
- **管理端口**：服务器管理员模式的端口（由 `admin on` 命令生成）
- **用户名**：管理员名称（用于日志记录）

---

## 命令列表

| 命令 | 功能 | 对应服务器命令 |
|------|------|----------------|
| [`broadcast`](#broadcast) | 广播消息 | `broadcast` |
| [`ban`](#ban) | 封禁管理 | `ban` |
| [`enable`](#enable) | 解除封禁 | `enable` |
| [`set`](#set) | 配置管理 | `set` |
| [`accept`](#accept) | 接受请求 | `accept` |
| [`reject`](#reject) | 拒绝请求 | `reject` |
| [`search`](#search) | 搜索用户 | `search` |
| [`req`](#req) | 查看请求 | `req` |
| [`cmd`](#cmd) | 执行系统命令 | - |
| [`exit`](#exit) | 退出客户端 | - |

::: warning 权限限制
管理员客户端**不支持**以下服务器命令：
- `admin`（管理员管理）
- `exit`（关闭服务器，仅退出客户端）
:::

---

## broadcast

向所有在线用户广播系统消息。

### 语法

```bash
broadcast <消息内容>
```

### 示例

```bash
> broadcast 服务器将在10分钟后维护
```

## ban

封禁管理，包括 IP 封禁和敏感词管理。


详细配置项请参考`help`命令中的说明。
---

## enable

解除封禁 IP 或词汇。

### 语法

```bash
enable <ip|words> <值1> [值2] [值3] ...
```

详细配置项请参考`help`命令中的说明。

## set

配置服务器运行参数。

### 语法

```bash
set <配置项> <值>
```

详细配置项请参考`help`命令中的说明。

---

## accept

接受用户的加入请求。

### 语法

```bash
accept <请求编号>
```

详细配置项请参考`help`命令中的说明。

### 使用流程

```bash
# 步骤 1：查看请求列表
> req
<0> 2044-space-elevator (192.168.1.104)
<1> piaoztsdy (192.168.1.105)

# 步骤 2：接受请求
> accept 0


```

---

## reject

拒绝用户的加入请求。

### 语法

```bash
reject <请求编号>
```

### 示例

```bash
> reject 0
```

详细配置项请参考`help`命令中的说明。

---

## search

搜索用户信息。

### 语法

```bash
search <条件> [参数]
```

详细配置项请参考`help`命令中的说明。
---

## req

查看当前所有待审批的加入请求。

### 语法

```bash
req
```

---

## cmd

执行系统命令并返回结果。

### 语法

```bash
cmd <系统命令>
```

### 示例

#### Windows 系统

```bash
# 查看网络配置
> cmd ipconfig

# 查看进程列表
> cmd tasklist

# 查看文件列表
> cmd dir
```

#### Linux/macOS 系统

```bash
# 查看网络配置
> cmd ifconfig

# 查看进程列表
> cmd ps aux

# 查看文件列表
> cmd ls -la
```

### 查看日志

#### Windows

```bash
# 查看完整日志
> cmd type log.txt

# 查看最后 20 行
> cmd powershell "Get-Content log.txt -Tail 20"
```

#### Linux/macOS

```bash
# 查看完整日志
> cmd cat log.txt

# 查看最后 20 行
> cmd tail -n 20 log.txt

# 搜索日志
> cmd grep "小明" log.txt
```

::: danger 安全警告
`cmd` 命令具有系统级权限，请谨慎使用：

:::

### 返回结果

命令执行结果会直接显示在终端。

---

## exit

退出管理员客户端。

### 语法

```bash
exit
```

### 说明

- ✅ 断开与服务器的连接
- ✅ 退出管理员客户端
- ❌ **不会**关闭服务器

::: info 关闭服务器
管理员客户端无法关闭服务器。如需关闭服务器，请在服务器控制台使用 `exit` 命令。
:::

---

## 错误日志

管理员客户端会将错误记录到 `admin_err.log` 文件。

### 查看错误日志

#### Windows

```bash
> cmd type admin_err.log
```

#### Linux/macOS

```bash
> cmd cat admin_err.log
```


## 使用建议

### 连接前准备

**推荐**：
1. 确认服务器已开启管理员模式
2. 记录管理端口号
3. 确认 IP 已添加到管理员列表

### 日常管理

**推荐**：
- 定期使用 `search online` 检查在线用户
- 使用 `req` 及时处理加入请求
- 定期查看日志了解服务器状态
- 合理使用 `broadcast` 通知用户

**不推荐**：
- 频繁执行 `cmd` 系统命令
- 过度封禁 IP 和敏感词
- 忽略待审批请求

---

## 对比：控制台 vs 管理员

| 功能 | 服务器控制台 | 管理员客户端 |
|------|-------------|-------------|
| 位置 | 服务器机器 | 任何授权机器 |
| 权限 | 完全控制 | 部分功能 |
| 审批用户 | ✅ | ✅ |
| 封禁管理 | ✅ | ✅ |
| 配置管理 | ✅ | ✅ |
| 踢出用户 | ✅ | ❌ |
| 管理员管理 | ✅ | ❌ |
| 关闭服务器 | ✅ | ❌ |
| 系统命令 | ✅ | ✅ |
| 远程管理 | ❌ | ✅ |

---
