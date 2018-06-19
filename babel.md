
/*
* ###  ---------------------------------------------         开始配置       ------------------------------------------------------

- npm i -D babel-plugin-transform-runtime
- npm i -D babel-runtime
- npm i -D babel-core babel-loader
- npm i -D babel-preset-env
- npm install babel-preset-es2015 --save-dev
- npm install babel-preset-es2015 --save-dev
- npm install --save-dev babel-preset-stage-2
- npm install --save-dev babel-cli babel-preset-react
.babelrc
```
{
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false
      }
    ]
   ],
  "presets": [
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "stage-2"
  ]
}
```



* Plugins *
*** babel-plugin-transform-runtime ***
减少冗余代码

ES6 代码转换成 ES5 代码时通常需要一些 ES5 写的辅助函数来完成新语法的实现， plugin-transform-runtime 的作用在于不把辅助函数内容注入到文件里，而是注入一条导入语句， 这样能减小 Babel 编译出来的代码的文件大小。

babel-plugin-transform-runtime 和 babel-runtime 需要配套使用


* Presets *

```
es2015 包含在2015里加入的新特性；
es2016 包含在2016里加入的新特性；
es2017 包含在2017里加入的新特性；
es2017 包含在2017里加入的新特性；
env 包含当前所有 ECMAScript 标准里的最新特性。
```

```
stage0 只是一个美好激进的想法，有 Babel 插件实现了对这些特性的支持，但是不确定是否会被定为标准；
stage1 值得被纳入标准的特性；
stage2 该特性规范已经被起草，将会被纳入标准里；
stage3 该特性规范已经定稿，各大浏览器厂商和 Node.js 社区开始着手实现；
stage4 在接下来的一年将会加入到标准里去。
```


* */








