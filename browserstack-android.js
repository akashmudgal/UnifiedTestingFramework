const browserstackAndroidConfig = {
    specs : [
        './test/android/specs/**/*.js'
    ],

    commonCapabilities: {
        app: process.env.BROWSERSTACK_APP_ID || 'bs://c9e40bc24541ef275c44ce353b7d4fd73d030f4e',
        'browserstack.debug': true
      },
    capabilities: 
    [
        {
        device: 'Google Pixel 3',
        os_version: "9.0"
        },
        {
        device: 'Samsung Galaxy S10e',
        os_version: "9.0"
        }
    ]
}

const { config: browserStackConfig} = require("./browserstack.conf.js")
exports.config={...browserStackConfig , ...browserstackAndroidConfig}

//add common capabilities
exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
  