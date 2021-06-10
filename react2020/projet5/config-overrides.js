/* config-overrides.js */

const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.alias = {
        assets: path.resolve(__dirname, 'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
    }

    return config;
}