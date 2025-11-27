---
title: 配置文件
icon: cog
category:
  - 文档
  - 配置
---

# 配置文件参考

本文档详细说明 TouchFish 服务器配置文件 `config.json` 的所有选项。

## 配置文件位置

配置文件 `config.json` 位于服务器程序的运行目录下。

```text
TouchFish/
├── chat.exe          # 服务器程序
├── config.json       # 配置文件
├── log.txt           # 日志文件
└── ...
```

---

## 默认配置

服务器首次运行时会自动创建默认配置文件：

```json
{
  "ban": {
    "words": [],
    "ip": [],
    "length": 2147483647
  },
  "ENTER_AFTER_PROMISE": false,
  "SHOW_ENTER_MESSAGE": false,
  "AUTO_REMOVE_OFFLINE": false
}
```

---

## 配置项详解

### ban

封禁相关配置。

```json
{
  "ban": {
    "words": ["敏感词1", "敏感词2"],
    "ip": ["192.168.1.110", "192.168.1.111"],
    "length": 500
  }
}
```

#### ban.words

**类型**：`Array<string>`  
**默认值**：`[]`（空数组）  
**说明**：敏感词列表


**示例**：

```json
{
  "ban": {
    "words": [
      "脏话",
      "广告",
      "不当内容",
      "spam"
    ]
  }
}
```


#### ban.ip

**类型**：`Array<string>`  
**默认值**：`[]`（空数组）  
**说明**：IP 黑名单

**作用**：
- 黑名单中的 IP 地址无法连接服务器
- 已连接的用户不会立即断开
- 下次连接时会被拒绝

**示例**：

```json
{
  "ban": {
    "ip": [
      "192.168.1.110",
      "192.168.1.111",
      "10.0.0.50"
    ]
  }
}
```

**IP 格式**：
- ✅ IPv4 地址：`192.168.1.100`
- ❌ 不支持 IP 段：`192.168.1.*`
- ❌ 不支持 CIDR：`192.168.1.0/24`


#### ban.length

**类型**：`number`  
**默认值**：`2147483647`（最大整数）  
**说明**：单条消息的最大字符数限制

**单位**：字符（不是字节）


**示例**：

```json
{
  "ban": {
    "length": 500
  }
}
```

**效果**：
- 超过限制的消息会被拒绝

**通过命令修改**：

```bash
# 设置为 500 字符
ban length 500

# 或
set ban_length 500

# 取消限制
ban length 2147483647
```

---

### ENTER_AFTER_PROMISE

**类型**：`boolean`  
**默认值**：`false`  
**说明**：是否需要手动审批用户加入

#### false - 自动审批模式

```json
{
  "ENTER_AFTER_PROMISE": false
}
```

**行为**：
- ✅ 用户请求加入后立即接受
- ✅ 无需管理员干预
- ✅ 快速加入聊天室


#### true - 手动审批模式

```json
{
  "ENTER_AFTER_PROMISE": true
}
```


---

### SHOW_ENTER_MESSAGE

**类型**：`boolean`  
**默认值**：`false`  
**说明**：是否广播用户加入消息

#### false - 静默加入

```json
{
  "SHOW_ENTER_MESSAGE": false
}
```

#### true - 广播加入

```json
{
  "SHOW_ENTER_MESSAGE": true
}
```

---

### AUTO_REMOVE_OFFLINE

**类型**：`boolean`  
**默认值**：`false`  
**说明**：是否自动移除长时间离线的用户

#### false - 保留用户记录

```json
{
  "AUTO_REMOVE_OFFLINE": false
}
```

#### true - 自动清理

```json
{
  "AUTO_REMOVE_OFFLINE": true
}
```

---
