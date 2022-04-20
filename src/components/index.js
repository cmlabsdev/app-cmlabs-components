import Vue from "vue";
import components from "./libs"

let { prefix } = JSON.parse(`<%= JSON.stringify(options) %>`)
prefix = prefix[0].toUpperCase() + prefix.substring(1);

for (const component in components) {
  Vue.component(`${prefix}${component}`, components[component]);
}
