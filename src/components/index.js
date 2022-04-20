import Vue from "vue";
import components from "./libs"

for (const component in components) {
  Vue.component(`Cm${component}`, components[component]);
}
