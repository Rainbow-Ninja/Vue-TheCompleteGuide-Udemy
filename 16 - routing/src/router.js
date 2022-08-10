import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams', 
            path: '/teams', 
            component: TeamsList, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // /teams/t1
            ]
        }, //our-domain.com/teams => TeamsList
        { path: '/users', component: UsersList },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active', // renaming the css class a.router-link-active to just a.active
    scrollBehavior(_, _2, savedPosition) { // _ and _2 says I need these args to get to the third arg, but I don't want to use them. It will stop the linter from complaining they are unused
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

export default router;