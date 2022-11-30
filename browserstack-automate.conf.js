const browserStackAutomateConfig= {

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_KEY,
    hostname: 'hub.browserstack.com',
    services: ['browserstack'],
    capabilities: [
        {
            "browserName" : "Chrome",
            "browserVersion" : "latest",
            'bstack:options' : {
                "os" : "Windows",
                "osVersion" : "11",
                "local" : "false",
            },
        },
        {
            "browserName" : "Firefox",
            "browserVersion" : "latest",
            'bstack:options' : {
                "os" : "Windows",
                "osVersion" : "10",
                "local" : "false",
            },
        },
    ]
}

const {config : baseConfig }=require("./base.conf.js")
exports.config={...baseConfig , ...browserStackAutomateConfig}