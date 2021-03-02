import Vue from "vue";
import App from "./App.vue";
// import sortable from "sortablejs/modular/sortable.complete.esm.js";

Vue.config.productionTip = false;
// Vue.use(sortable);

new Vue({
    render: h => h(App),
}).$mount("#app");
