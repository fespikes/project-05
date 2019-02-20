# WarpstorFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

### Unit test

```bash
npm test
```

### I18n

```bash
npm run i18n
```

### Collaboration

***must:***

1. 提交合并前，务必检查lint没有抛错，UT都能跑过。关于lint，可以安装编辑器lint插件，如vscode的tslint。也可以提交前跑`npm run lint`来检查lint错误。
2. 请检查编辑器是否加载了editorconfig里面的配置

***nice to have:***

遵照[karma commit rule](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)来描述commit。

#### 模块定义

- shared
模块间公用组件或服务

### Release

```bash
npm run build:prod
```

### 制作CI build image

当node依赖更新时，需重新制作image。在项目根目录下运行

```
docker build . -f ci/Dockerfile -t tdc/warpstor-frontend
docker tag tdc/warpstor-frontend 172.16.1.99/frontend/warpstor-frontend/build/warpstor-frontend:latest
docker push 172.16.1.99/frontend/warpstor-frontend/build/warpstor-frontend:latest
```

### 得到最新的artifacts

对于master分支，可由以下链接得到最新的artifacts，即`npm run build:prod`得到的文件。
```
http://172.16.1.41:10080/TDC/warpstor-frontend/-/jobs/artifacts/master/download?job=postcommit
```
