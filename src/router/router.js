import Main from "@/pages/Main.vue";
import { createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPageWithStore.vue";
import About from "@/pages/About.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;