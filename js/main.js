// コンポーネント
// Vue.component('hello-component',{
//   template: '<p>Hello</p>'
// })

// フィルタ（グローバルフィルタ）
Vue.filter('numberFormat',function(value){
  return value.toLocaleString()
})
// フィルタの連結（グローバルフィルタで作成。numberFormat'は上記を使用）
Vue.filter('toUSD',function(jpy){
  return jpy/100
})
// フィルタの引数
// substring(開始位置.抽出する長さ)。 textは引数に入れない。
Vue.filter('readMore',function(text,length,suffix){
  return text.substring(0,length)+suffix
})



var app = new Vue({
  el: '#app',
  data:{
    // v-onceディレクティブ,v-preディレクティブ,v-cloakディレクティブ,v-textディレクティブ
    message: 'Hello,vue.js!',
    // v-htmlディレクティブ
    message2: 'Hello,<span style="color:red;">vue.js!</span>',
    // JavaScript式
    message3:'Hello,JavaScript式',
    number:100,
    ok:true,
    // フィルタ（ローカル＆グローバルフィルタ）
    price:298000,
    // フィルタの連結
    jpyPrice:2980000,
    // フィルタの引数
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.',
    // v-bind省略記法
    url:'https://en.wikipedia.org/wiki/Lorem_ipsum'
  },
  methods:{
    // v-onceディレクティブ
    clickHandler: function(event){
      // 文字の反転
      this.message = this.message.split('').reverse().join('')
    }
  },

  // フィルタ（ローカルフィルタ）←グローバル記載したのでコメントアウトした
  filters:{
    // numberFormat: function(value){
    //   return value.toLocaleString()
    // }
  }
})
