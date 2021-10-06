<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed(() => route.name)

const store = useStore()
const userName = computed(() => store.state.user.name)
</script>
<template>
    <svg class="h-14 w-48 -mb-10 pt-1">
        <use xlink:href="src/assets/logo.svg#letters"></use>
        <use xlink:href="src/assets/logo.svg#underline"></use>
    </svg>
    <div class="flex items-center">
        <div class="pr-4 pl-2">/</div>
        {{ routeName }}, {{ userName }}
    </div>
</template>
