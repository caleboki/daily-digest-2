import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import Index from './components/Index.vue';

const app = createApp({
    components: {
        Index,
    }
});

app.mount("#app");
