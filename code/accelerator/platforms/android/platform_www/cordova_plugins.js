cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device-motion.Acceleration",
    "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "Acceleration"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.accelerometer",
    "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "navigator.accelerometer"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-plugin-device-motion": "1.2.5",
  "cordova-plugin-dialogs": "1.3.3"
};
// BOTTOM OF METADATA
});