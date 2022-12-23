const browserstackiOSConfig = {
    specs : [
        './test/iOS/specs/**/*.js'
    ],

    commonCapabilities: {
        project: "UTF - IOS",
        build: 'iOS Parallel',
        name: 'parallel_test',
        app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
        'browserstack.debug': true
      },

    capabilities: [{
        device: "iPhone 11 Pro",
        os_version: "13"
    },
    {
        device: "iPhone 11 Pro Max",
        os_version: "13"
    }],
}

const { config: browserStackConfig} = require("./browserstack.conf.js")
exports.config={...browserStackConfig , ...browserstackiOSConfig}

//add common capabilities
exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
  