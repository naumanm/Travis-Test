module.exports = {
  options: {
    accessKeyId: '<%= process.env["aws_access_key_id"] %>',
    secretAccessKey: '<%= process.env["aws_secret_access_key"] %>',
    uploadConcurrency: 5,
    downloadConcurrency: 5,
    params: {
      CacheControl: 'public, max-age=2592000'
    }
  },
  default: {
    options: {
      bucket: '<%= process.env["aws_bucket"] %>',
      differential: true,
      gzipRename: 'ext'
    },
    files: [{
      action: 'upload',
      expand: true,
      dest: "<%= config.aws_s3_path %>/<%= config.versionPath %>/",
      src: ['**/*.gz', '!**/*.html.gz'],
      options: {gzip: true}
    }
    ]
  }
};