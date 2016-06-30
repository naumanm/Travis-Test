window.onload = function() {

  function main() {
    var service = configAWS();
    showCurrentVersion();
  }

  function configAWS() {
    var config = getConfigObj();
    var awsKeyObj = {accessKeyId: config.aws.accessKey, secretAccessKey: config.aws.secretAccessKey};
    AWS.config.update(awsKeyObj);
    return new AWS.S3({params: {Bucket: config.aws.bucket}});
  }

  function getConfigObj() {
    return configObj = {
      aws: {
        accessKey: '',
        secretAccessKey: '',
        bucket: ''
      }
    };
  }

  function showCurrentVersion() {
    var baseHref = document.getElementsByTagName('base')[0].href;
    document.getElementById('title').innerHTML = "Current version: " + baseHref;
    console.log(baseHref);
  }

  main();

};