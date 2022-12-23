const browserstackConfig={
    user: 'akashmudgal_qM9YFW',
    key: 'sEGDYckEiy32fu1b8G1k',
    hostname: 'hub.browserstack.com',
    services: ['browserstack'],
}

const {config : baseConfig} = require("./base.conf.js")
exports.config = {...baseConfig, ...browserstackConfig }