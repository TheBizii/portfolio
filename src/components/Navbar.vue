<style lang="css" scoped>
li a.router-link-active::before {
  content: '$';
  margin-right: 5px;
  color: var(--color-primary);
}

li a.router-link-active {
  color: var(--color-highlight);
}

li a:not(.router-link-active) {
  color: var(--color-secondary);
}
</style>

<template>
  <header class="fixed w-full bg-eerieblack/80 backdrop-blur-sm">
    <div class="flex justify-between items-center py-[30px] px-[50px]">
      <router-link :to="{ name: 'home' }" class="text-3xl uppercase font-extrabold">
        <span class="text-highlight">Tomaž </span>
        <span class="text-eerieblack bg-highlight py-[5px] px-[10px]">Bizjak</span>
      </router-link>
      <div class="flex items-center">
        <ul class="flex list-none gap-4">
          <li v-for="link in links" :key="link.name" class="text-xl lowercase">
            <router-link :to="link.path">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <a
          href="/resume.pdf"
          class="text-lg border border-solid border-highlight text-highlight py-[5px] px-[10px] ml-[50px]"
          >Resume</a
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter() // router instance

interface NavLink {
  name: string
  path: string
}

// this fetches all top-level routes from the router
const routes = router.getRoutes()

// we can then filter those that we want to show in the navigation bar
const links: NavLink[] = routes
  .filter((r) => r.meta?.showInNav)
  .map((r) => ({
    name: (r.meta?.title as string) || r.name?.toString() || 'Unnamed route',
    path: r.path,
  }))
</script>
