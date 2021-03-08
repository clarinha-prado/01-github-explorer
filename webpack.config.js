// importar usando require porque o webpack roda dentro do node e o node só entende
// import usando require
const path = require('path');

module.exports = {
    mode: 'development',
    // __dirname = diretório onde se encontra o arquivo atual
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ]
    }
}