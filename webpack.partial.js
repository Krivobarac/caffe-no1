var ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
    plugins: [
        new ImageminPlugin({
            pngquant: {
                quality: '95-100'
            }
        })
    ]
};