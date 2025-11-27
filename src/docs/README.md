---
title: 文档
icon: book
category:
  - 文档
---

# TouchFish 技术文档

欢迎来到 TouchFish 技术文档中心。这里提供详细的命令参考、协议规范和配置说明。


## 命令快速索引

### 服务器常用命令

| 命令 | 功能 | 示例 |
|------|------|------|
| `help` | 显示帮助 | `help` |
| `search` | 搜索用户 | `search online` |
| `broadcast` | 广播消息 | `broadcast 通知内容` |
| `ban` | 封禁管理 | `ban ip 192.168.1.110` |
| `set` | 配置管理 | `set EAP on` |
| `accept` | 接受请求 | `accept 0` |
| `req` | 查看请求 | `req` |
| `admin` | 管理员模式 | `admin on` |

完整命令列表请查看[服务器命令参考](./server-commands.md)。

### 管理员客户端命令

| 命令 | 功能 | 示例 |
|------|------|------|
| `broadcast` | 广播消息 | `broadcast 通知` |
| `ban` | 封禁管理 | `ban ip 192.168.1.110` |
| `search` | 搜索用户 | `search online` |
| `accept` | 接受请求 | `accept 0` |
| `cmd` | 系统命令 | `cmd ls -la` |

完整命令列表请查看[管理员命令参考](./admin-commands.md)。

---

## 配置快速索引

### 核心配置项

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `ENTER_AFTER_PROMISE` | boolean | `false` | 是否手动审批 |
| `SHOW_ENTER_MESSAGE` | boolean | `false` | 显示进入提示 |
| `AUTO_REMOVE_OFFLINE` | boolean | `false` | 自动清理离线 |
| `ban.length` | number | `2147483647` | 消息长度限制 |
| `ban.words` | array | `[]` | 敏感词列表 |
| `ban.ip` | array | `[]` | IP 黑名单 |

详细配置说明请查看[配置文件参考](./config.md)。

---

## 相关链接

### 教程文档

- [快速开始](../guide/quickstart.md) - 新手入门
- [服务器配置教程](../guide/server-setup.md) - 服务器设置
- [客户端使用教程](../guide/client-usage.md) - 客户端功能
- [管理员使用教程](../guide/admin.md) - 管理技巧

### 外部资源

- [TouchFish GitHub](https://github.com/2044-space-elevator/TouchFish)
- [TouchFish Wiki](https://github.com/2044-space-elevator/TouchFish/wiki)
- [官方网站](https://www.bopid.cn/chat)
- [镜像站](https://mirror.ilovescratch.dpdns.org/)
