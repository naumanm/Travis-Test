module.exports = {
  options: {
    accessKeyId: '<%= process.env["aws_access_key_id"] %>',
    secretAccessKey: '<%= process.env["aws_secret_access_key"] %>',
    uploadConcurrency: 5,
    downloadConcurrency: 5,
    access: '<%= process.env["AWS_ACCESS_PERMISSION"] %>',
    region: '<%= process.env["AWS_REGION"] %>',
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
      cwd: "dist",
      dest: "<%= config.aws_s3_path %>/<%= config.versionPath %>",
      src: ['./*']
    }
    ]
  },
  rootHTML : {
    options: {
      bucket: '<%= process.env["aws_bucket"] %>',
      differential: true,
      gzipRename: 'ext'
    },
    files: [{
      action: 'upload',
      expand: true,
      cwd: "dist",
      dest: "<%= config.aws_s3_path %>/",
      src: ['**/*.html.gz'],
      params: {CacheControl: 'private, no-cache, max-age=0'},
      options: {gzip: true}
    }
    ]
  }
};