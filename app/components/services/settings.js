angular.module('web')
  .factory('settingsSvs', [function () {

    return {
      autoUpgrade: {
        get: function () {
          return parseInt(localStorage.getItem('autoUpgrade') || 1);
        },
        set: function (v) {
          return localStorage.setItem('autoUpgrade', v);
        }
      },
      isCame: {
        get: function () {
          return parseInt(localStorage.getItem('isCame') || 0);
        },
        set: function (v) {
          return localStorage.setItem('isCame', v);
        }
      },
      maxUploadJobCount: {
        get: function () {
          return parseInt(localStorage.getItem('maxUploadJobCount') || 3);
        },
        set: function (v) {
          return localStorage.setItem('maxUploadJobCount', v);
        }
      },

      maxDownloadJobCount: {
        get: function () {
          return parseInt(localStorage.getItem('maxDownloadJobCount') || 3);
        },
        set: function (v) {
          return localStorage.setItem('maxDownloadJobCount', v);
        }
      },

      showImageSnapshot: {
        get: function () {
          return parseInt(localStorage.getItem('showImageSnapshot') || 1);
        },
        set: function (v) {
          return localStorage.setItem('showImageSnapshot', v);
        }
      },

      historiesLength: {
        get: function () {
          return parseInt(localStorage.getItem('historiesLength') || 100);
        },
        set: function (v) {
          return localStorage.setItem('historiesLength', v);
        }
      },
      mailSmtp: {
        get: function () {
          return JSON.parse(localStorage.getItem('mailSender') || '{"port":465}');
        },
        set: function (v) {
          return localStorage.setItem('mailSender', JSON.stringify(v));
        }
      },
      logFile: {
        get: function () {
          return parseInt(localStorage.getItem('logFile') || 0);
        },
        set: function (v) {
          return localStorage.setItem('logFile', v);
        }
      },
      logFileInfo: {
        get: function () {
          return parseInt(localStorage.getItem('logFileInfo') || 0);
        },
        set: function (v) {
          return localStorage.setItem('logFileInfo', v);
        }
      },
      getRequestPayStatus: {
        get: function () {
          return localStorage.getItem('show-request-pay') || 'NO';
        },
        set: function (v) {
          return localStorage.setItem('show-request-pay', v);
        }
      },
      connectTimeout: {
        get: function () {
          return parseInt(localStorage.getItem('connectTimeout') || 60000);
        },
        set: function (v) {
          return localStorage.setItem('connectTimeout', v);
        }
      },
      uploadPartSize: {
        get: function () {
          return parseInt(localStorage.getItem('uploadPartSize') || 10);
        },
        set: function (v) {
          return localStorage.setItem('uploadPartSize', v);
        }
      },
      uploadAndDownloadRetryTimes: {
        get: function () {
          return parseInt(localStorage.getItem('uploadAndDownloadRetryTimes') || 3);
        },
        set: function (v) {
          return localStorage.setItem('uploadAndDownloadRetryTimes', v);
        }
      },
      sparrowCallbackUrl: {
        get: function () {
          return localStorage.getItem('sparrowCallbackUrl') || 'https://backend5.dongyouliang.com/api/sparrow_image/callback/';
        },
        set: function (v) {
          return localStorage.setItem('sparrowCallbackUrl', v);
        }
      },
      sparrowBatch: {
        get: function () {
          return parseInt(localStorage.getItem('sparrowBatch') || 0);
        },
        set: function (v) {
          return localStorage.setItem('sparrowBatch', v);
        }
      },
      sparrowBatchSize: {
        get: function () {
          return parseInt(localStorage.getItem('sparrowBatchSize') || 50);
        },
        set: function (v) {
          return localStorage.setItem('sparrowBatchSize', v);
        }
      }
    };
  }]);
