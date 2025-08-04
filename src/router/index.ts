import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InterestsView from '../views/InterestsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { showInNav: false },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { showInNav: true },
    },
    {
      path: '/interests',
      name: 'interests',
      component: InterestsView,
      meta: { showInNav: true },
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: { showInNav: true },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { showInNav: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { showInNav: true },
    },
  ],
})

export default router
