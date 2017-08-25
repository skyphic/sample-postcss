module.exports = function () {
  return {
    plugins: [
      require('postcss-easy-import')({
      "glob": true
    }),
      require('postcss-strip-inline-comments')({}),
      require('autoprefixer')({
        'browserslist': [
          'ie >= 11',
          'Android >= 4.1',
          'last 2 versions'
        ]
      }),
      require('postcss-calc')({}),
      require('postcss-extend')({}),
      require('postcss-sassy-mixins')({}),
      require('postcss-custom-properties')({}),
      require('postcss-nested')({}),
      require('postcss-percentage')({}),
      require('cssnano')({})
    ]
  }
};

//package.json 内に設定を書く場合
//
// "postcss": {
//   "map": false,
//     "plugins": {
//     "postcss-easy-import": {
//       "glob": true
//     },
//     "postcss-strip-inline-comments":{},
//     "autoprefixer": {
//       "browserslist": [
//         "ie >= 11",
//         "Android >= 4.1",
//         "last 2 versions"
//       ]
//     },
//     "postcss-calc": {},
//     "postcss-extend": {},
//     "postcss-sassy-mixins": {},
//     "postcss-custom-properties": {},
//     "postcss-nested": {},
//     "postcss-percentage": {},
//     "cssnano": {}
//   }
// }
