import Vue from "vue";
import components from "./libs"

for (const component in components) {
  Vue.component(components[component].name, components[component]);
}
