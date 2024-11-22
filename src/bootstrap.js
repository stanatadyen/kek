import Vue from "vue";
import App from "./app.vue";

window.onload = function () {
  new Vue({
    el: "#app",
    render: (h) => h(App),
  });
};
