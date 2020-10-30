const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPlugins([[withCSS(withSass({
    devIndicators: {
      autoPrerender: false,
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1000000,
                    name: '[name].[ext]'
                }
            },

        })
        return config;
    },
    env: {
        server: process.env.NODE_ENV && process.env.NODE_ENV !== 'development' ? 'http://88.198.205.97/api/v1/b2c' : 'http://localhost:8080'
    }
})), withImages()]]);
