module.exports = {
  default: {
    options: {
      mode: 'gzip'
    },
    files: [
      {expand: true, src: ['dist/**/*.js'], dest: '.', ext: '.js.gz'},
      {expand: true, src: ['dist/**/*.js.map'], dest: '.', ext: '.js.map.gz'},
      {expand: true, src: ['dist/**/*.css'], dest: '.', ext: '.css.gz'},
      {expand: true, src: ['dist/**/*.arb'], dest: '.', ext: '.arb.gz'},
      {expand: true, src: ['dist/**/*.html'], dest: '.', ext: '.html.gz'},
      {expand: true, src: ['dist/**/*.json'], dest: '.', ext: '.json.gz'}
    ]
  }
};