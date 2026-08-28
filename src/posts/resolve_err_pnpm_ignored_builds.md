---
icon: pen-to-square
date: 2026-08-35
category:
  - nodejs
  - pnpm
tag:
  - 错误解决
---

# 解决 pnpm install 时发生的 ERR_PNPM_IGNORED_BUILDS 问题

## 问题分析

如今的 pnpm 对构建脚本的安全管控做了重大升级, 所有非授权包的构建脚本默认拦截, 且配置入口完全迁移到了项目根目录的 `pnpm-workspace.yaml` 文件中

这导致在一些条件下可能会出现诸如 `[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: esbuild@0.28.2` 之类的错误, 虽然确实安全但是也足够烦人

## 解决方法

在项目根目录创建 `pnpm-workspace.yaml` 文件, 然后填写以下内容

```yaml
allowBuilds:
  esbuild: true

```

需要允许哪个通过就加哪个，比如错误日志提示 `[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: @parcel/watcher@2.6.0` 那就应该写成

```yaml
allowBuilds:
  "@parcel/watcher": true
```

如果你是在创建 VuePress Theme Hope 项目, 那你需要在选择好语言后再创建文件防止误判目录为非空目录
