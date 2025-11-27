---
title: 服务器配置
icon: server
order: 2
category:
  - 指南
  - 服务器
---

# 服务器配置教程

本教程将详细介绍如何配置和管理 TouchFish 服务器端。

## 服务器启动

### 交互式启动（推荐）

直接运行服务器程序，按照提示输入配置：

```bash
# Windows
chat.exe

# Linux/macOS (预编译)
./chat

# Python 源码
python chat.py
```

程序会依次提示您输入：

```text
Connect to IP: 192.168.1.100        # 本机 IP 或 0.0.0.0
The maximum times of connecting: 20  # 最大连接数
The connecting port (must be spare): 8080  # 监听端口
```

### 命令行启动

可以直接传递参数快速启动：

```bash
# 格式：chat <IP> <最大连接数> <端口>
chat 192.168.1.100 20 8080

# Python 源码
python chat.py 192.168.1.100 20 8080
```

::: tip 适用场景
命令行启动适合写入脚本自动化部署，或者服务器重启后快速恢复。
:::

---

## 网络配置

### 获取服务器 IP 地址

#### Windows 系统

1. 按 `Win + R` 打开运行窗口
2. 输入 `cmd` 打开命令提示符
3. 输入 `ipconfig` 查看网络配置
4. 找到"无线局域网适配器 WLAN"或"以太网适配器"下的"IPv4 地址"

```text
无线局域网适配器 WLAN:
   IPv4 地址 . . . . . . . . . . . . : 192.168.1.100  ← 这就是您的 IP
```

#### Linux 系统

```bash
# 方法 1
ip addr show

# 方法 2
ifconfig

# 方法 3（推荐）
hostname -I
```

#### macOS 系统

```bash
# 查看所有网络接口
ifconfig

# 或者
ipconfig getifaddr en0  # Wi-Fi
ipconfig getifaddr en1  # 以太网
```

### 端口选择建议

::: info 端口范围
- **系统保留端口**：0-1023（需要管理员权限）
- **注册端口**：1024-49151（推荐使用）
- **动态端口**：49152-65535
:::

**推荐端口**：
- `8080` - HTTP 代理默认端口
- `8888` - 常用备用端口
- `9000-9999` - 自定义服务端口

### 检查端口占用

#### Windows

```powershell
# 检查特定端口
netstat -an | findstr :8080

# 如果有输出，说明端口被占用
```

#### Linux/macOS

```bash
# 检查特定端口
netstat -an | grep 8080

# 或者使用 lsof
lsof -i :8080
```

::: warning 端口占用
如果端口已被占用，服务器会启动失败并提示错误：
```
[Error] 绑定端口失败，可能的原因有：
1. 端口已被占用
2. 没有权限绑定该端口
```
:::

### 防火墙配置

#### Windows 防火墙

**方法 1：临时关闭（不推荐）**
```powershell
# 关闭防火墙（需要管理员权限）
netsh advfirewall set allprofiles state off
```

**方法 2：添加防火墙规则（推荐）**
1. 打开"Windows Defender 防火墙"
2. 点击"高级设置"
3. 点击"入站规则" → "新建规则"
4. 选择"端口" → 下一步
5. 选择"TCP"，输入端口号（如 8080）
6. 选择"允许连接"
7. 应用于所有配置文件
8. 命名规则（如"TouchFish Server"）

**使用 PowerShell（管理员权限）**：
```powershell
New-NetFirewallRule -DisplayName "TouchFish Server" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow
```

#### Linux 防火墙（iptables）

```bash
# 开放端口
sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT

# 保存规则
sudo iptables-save > /etc/iptables/rules.v4
```

#### Linux 防火墙（firewalld）

```bash
# 开放端口
sudo firewall-cmd --add-port=8080/tcp --permanent

# 重载配置
sudo firewall-cmd --reload
```

---

## 配置文件

服务器第一次启动时会创建 `config.json` 配置文件。

### 配置文件结构

```json
{
  "ban": {
    "words": [],           // 敏感词列表
    "ip": [],              // IP 黑名单
    "length": 2147483647   // 消息最大长度
  },
  "ENTER_AFTER_PROMISE": false,      // 通过后才能加入
  "SHOW_ENTER_MESSAGE": false,       // 显示进入消息
  "AUTO_REMOVE_OFFLINE": false       // 自动移除离线用户
}
```

### 配置项说明

#### `ban.words` - 敏感词过滤

```json
{
  "ban": {
    "words": ["脏话", "广告", "不当内容"]
  }
}
```

- 包含敏感词的消息会被拒绝发送
- 用户名包含敏感词会被拒绝加入

#### `ban.ip` - IP 黑名单

```json
{
  "ban": {
    "ip": ["192.168.1.50", "192.168.1.51"]
  }
}
```

- 黑名单 IP 无法连接服务器

#### `ban.length` - 消息长度限制

```json
{
  "ban": {
    "length": 500
  }
}
```

- 单位：字符
- 超过长度的消息会被拒绝

#### `ENTER_AFTER_PROMISE` - 审批模式

```json
{
  "ENTER_AFTER_PROMISE": true
}
```

- `false`：自动接受所有连接请求
- `true`：需要管理员手动审批

::: tip 推荐设置
- 公开聊天室：`false`
- 私密聊天室：`true`
:::

#### `SHOW_ENTER_MESSAGE` - 进入提示

```json
{
  "SHOW_ENTER_MESSAGE": true
}
```

- `true`：用户加入时广播通知
- `false`：静默加入

#### `AUTO_REMOVE_OFFLINE` - 自动清理

```json
{
  "AUTO_REMOVE_OFFLINE": true
}
```

- `true`：自动移除长时间离线的用户
- `false`：保留所有用户记录

### 手动编辑配置

1. 停止服务器
2. 用文本编辑器打开 `config.json`
3. 修改配置项
4. 保存文件
5. 重新启动服务器

::: warning 注意
直接编辑配置文件时请确保 JSON 格式正确，否则服务器会重置配置。
:::

---

## 服务器控制台命令

服务器启动后，在控制台提示符 `IP:PORT>` 后可以输入命令。


::: tip 查看详细文档
完整的命令参考请查看[服务器命令文档](../docs/server-commands.md)
:::
