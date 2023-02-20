import { createApp } from 'vue';

import { createPinia } from 'pinia';
import router from './router.js';
// import store from './store/index.js'
import App from "./App.vue";
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from "./components/ui/BaseButton";
import BaseBadge from './components/ui/BaseBadge'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
// app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
