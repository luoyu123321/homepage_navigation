const path = require('path')
const baseUrl = process.env.NODE_ENV === 'production' ? './' : '/'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    /* build的时候打包成相对路径，dev时用绝对路径 */
    publicPath: baseUrl,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass:{
                prependData:'@import "@/assets/style/_family.scss";@import "@/assets/style/_theme.scss";'
            }
        }
    },
    configureWebpack: config => {
        const obj = {}


        /* 配置图片路径，在scss中如果要引入背景图可以用~img即可 */
        obj.resolve = {
            alias: {
                img: '@/assets/img'
            }
        }

        /* 生产环境下禁止console.log */
        if (process.env.NODE_ENV === 'production') {
            obj.plugins = [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_debugger: true,
                            drop_console: true
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            ]
        }
        return obj
    },
    devServer: {
        port: 9090
    }
}
