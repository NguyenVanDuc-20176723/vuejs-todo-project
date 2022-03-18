import Vue from 'vue'
import App from './App.vue'
import './assets/less/styles.less';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(ViewUI);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app');



