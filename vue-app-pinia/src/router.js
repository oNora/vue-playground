import { createRouter, createWebHistory } from 'vue-router';

import CoacheDetail from './pages/coaches/CoacheDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegister from './pages/coaches/CoachRegister';
import ContactCoach from './pages/request/ContactCoach';
import RequestReceived from './pages/request/RequestReceived';
import NotFound from './pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches'},
        { path: '/coaches', component: CoachesList},
        { 
            path: '/coaches/:id', 
            component: CoacheDetail, 
            props: true,
            children: [
                {  path: 'contact', component: ContactCoach }  // /coaches/c1/contact
            ]
        },
        { path: '/register', component: CoachRegister},
        { path: '/request', component: RequestReceived},
        { path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;