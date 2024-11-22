import Vue from "vue";

export default function (View, props) {
  const vm = new Vue({
    name: `remote-mfe-dummy`, // identify the new Vue instance
    render: (h) => h("div", { class: "u-height-full" }, [h(View, { props })]),
  }).$mount();

  return vm;
}
