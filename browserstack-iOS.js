const browserstackiOSConfig = {
    specs : [
        './test/iOS/specs/**/*.js'
    ],

    commonCapabilities: {
        app: process.env.BROWSERSTACK_APP_ID || 'bs://b42a26fcedc3afa2468b39c653c4c50030304866',
        'browserstack.debug': true,
        'browserstack.resignApp' : false
      },

    capabilities: [{
        device: "iPhone XS",
        os_version: "14"
    },
    // {
    //     device: "iPhone 11 Pro Max",
    //     os_version: "13"
    // }
    ],
}

const { config: browserStackConfig} = require("./browserstack.conf.js")
exports.config={...browserStackConfig , ...browserstackiOSConfig}

//add common capabilities
exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
  