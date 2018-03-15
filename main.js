const Vue = require('nativescript-vue');
const App = require('./components/App');

new Vue({
  render: h => h(App),
}).$start();
