const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://127.0.0.1:8080',
    outputDir: '../backend/static/dist',
    indexPath: '../../templates/base-vue.html', // relative to outputDir!
    transpileDependencies: true,

    devServer: {
        devMiddleware:{
            writeToDisk : filePath => filePath.endsWith("index.html"),
            headers: {"Access-Control-Allow-Origin": "*"},
            // publicPath: "http://localhost:8080",
            // publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://127.0.0.1:8080'
        },
        hot: 'only'
    }
})
