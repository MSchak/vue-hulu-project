import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCoffee, faTimes, faEllipsisV, faSearch,faPlayCircle, faCaretDown, faBars, faCaretRight} from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee,faTimes, faEllipsisV,faSearch,faPlayCircle, faCaretDown, faBars, faCaretRight);

createApp(App)
.component('fa', FontAwesomeIcon).use(router).mount('#app')
