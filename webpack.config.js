/*
* 想让源文件加入到构建流程中去被 Webpack 控制，配置 entry。
想自定义输出文件的位置和名称，配置 output。
想自定义寻找依赖模块时的策略，配置 resolve。
想自定义解析和转换文件的策略，配置 module，通常是配置 module.rules 里的 Loader。
其它的大部分需求可能要通过 Plugin 去实现，配置 plugin。
* */

const path = require('path');
const biaoJs = require("./util/selfJS.js");
const _output = require("./webpack/ouput.js");
const _entry = require("./webpack/entry.js");
const _module = require("./webpack/module.js");
const _resolve = require("./webpack/resolve.js");
const _plugins = require("./webpack/plugin.js");
const _devServer = require("./webpack/devServer.js");
const _other = require("./webpack/other.js");

// 导出一个Object;
// module.exports = configuration;

// //   导出一个function
// env：当前运行时的 Webpack 专属环境变量，env 是一个 Object。读取时直接访问 Object 的属性，设置它需要在启动 Webpack 时带上参数。例如启动命令是 webpack --env.production --env.bao=foo时，则 env 的值是 {"production":"true","bao":"foo"}。
// argv：代表在启动 Webpack 时所有通过命令行传入的参数，例如 --config、--env、--devtool，可以通过 webpack -h 列出所有 Webpack 支持的命令行参数。
module.exports = function (env = {}, argv) {
    const isProduction = env['NODE_ENV'] == "production" ;
    console.log("我是 webpack.config.js");

    let configuration = {
        // 如何输出结果：在 Webpack 经过一系列处理后，如何输出最终想要的代码。
        entry: _entry,
        output: _output ,
        // 配置模块相关
        module: _module,
        // 配置插件
        plugins: _plugins,
        resolve: _resolve,
        devServer: _devServer,
    }
    let _biaoJS = new biaoJs();
    configuration = _biaoJS.extend( configuration, _other );

    // 在生产环境加入
    if (isProduction) {

    } else {

    }
    return configuration;
}