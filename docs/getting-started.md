---
order: 0
title: 开始使用
type: 入门
time: 2019-07-19
---

## 前序准备

你的本地环境需要安装 [yarn](https://yarnpkg.com)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)。

## 安装

```
// yarn
yarn add @sensoro/sensoro-design

// npm
npm install -D @sensoro/sensoro-design
```

## 使用

```
import React form 'react';
import { SendCode } form '@sensoro/sensoro-design';

class Example extends React.Component {
  render() {
    return (
      <div>
        <SendCode />
      </div>
    )
  }
}

```
