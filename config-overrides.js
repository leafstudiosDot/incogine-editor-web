module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.target = 'web'
    return config;
}