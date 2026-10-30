const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'quienes-somos.html', to: 'quienes-somos.html' },
        { from: 'cursos.html', to: 'cursos.html' },
        { from: 'curso-desarrollo-web.html', to: 'curso-desarrollo-web.html' },
        { from: 'curso-inteligencia-artificial.html', to: 'curso-inteligencia-artificial.html' },
        { from: 'blog.html', to: 'blog.html' },
        { from: 'blog-html-semantico.html', to: 'blog-html-semantico.html' },
        { from: 'blog-ia-aprendizaje.html', to: 'blog-ia-aprendizaje.html' },
        { from: 'registro.html', to: 'registro.html' },
        { from: 'login.html', to: 'login.html' },
        { from: 'contacto.html', to: 'contacto.html' },
        { from: 'aviso-legal.html', to: 'aviso-legal.html' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
