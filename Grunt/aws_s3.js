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
      cwd: "dist",
      dest: "lalo",
      src: ['**/*.html', '**/*.js']
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
      src: ['**/*.html', '**./*.js'],
      params: {CacheControl: 'private, no-cache, max-age=0'},
      options: {gzip: true}
    }
    ]
  }
};