import { createApp } from "vue";
import { createPinia } from "pinia";

export default () => {
  console.log("vue+pinia 載入中...");
  const vue = createApp({});
  const pinia = createPinia();

  vue.use(pinia);
  console.log("vue+pinia 載入完畢");
};
