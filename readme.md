# 🐒 油猴脚本开发框架

这是一个很Mini的油猴脚本开发框架，使用 Vite 和 TypeScript，为开发者提供快速、可靠、易用的开发体验

## 🏷️ 功能

- 🚄 极速启动: Vite 带来的超快开发服务器，让你的迭代体验如丝般顺滑。
- 🛡️ 类型保护: TypeScript 的强类型特性，帮助你避免运行时错误。
- 📚 简洁易懂: 简单明了的项目结构，上手毫无压力。
- 🔥 现代化工具: 最新的开发工具链，让你站在技术前沿。

## 🚀 如何使用

### 一键使用模板

[点击使用模板](https://github.com/new?template_name=tampermonkey-template&template_owner=QC2168)

### 克隆项目

```bash
git clone https://github.com/QC2168/tampermonkey-template.git
```

### 安装所需依赖

```bash
pnpm install
```

> 👍 强烈建议使用 `pnpm` 作为包管理器，但 `npm` 也是可行的选择。


### 项目结构概览

- 📂 `src/index.ts`: 脚本的主要入口文件。
- 📂 `meta/commonMeta.ts`: 配置脚本的元数据。

### 开发模式启动

```bash
pnpm dev
```

> 💡 开发模式下，文件的任何改动都会触发自动重新构建，便于调试
>
> ⚠️ 需要在浏览器扩展设置里启用“允许油猴扩展访问本地文件URL”的选项。

### 构建生产版本

```bash
pnpm build
```


## 📚 相关资料

- **油猴官方文档:** [Tampermonkey Documentation](https://tampermonkey.net/documentation.php) - 学习更多关于油猴脚本的知识。
- **Vite 官方文档:** [Vite Official Site](https://vitejs.dev/) - 了解更多关于 Vite 的信息。


## 🤝 贡献指南

如果你有任何想法或发现任何问题，欢迎通过提交 Issue 或 Pull Request 来贡献你的力量！
