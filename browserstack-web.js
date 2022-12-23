const browserstackWebConfig = {
    specs: [
        './test/web/specs/**/*.js'
    ],
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

const { config: browserStackConfig} = require("./browserstack.conf.js")
exports.config={...browserStackConfig , ...browserstackWebConfig}