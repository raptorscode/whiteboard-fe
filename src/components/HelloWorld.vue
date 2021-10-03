<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
const store = useStore()

const name = computed(() => store.state.user.name)

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <h2 class="font-bold text-xl">{{ msg }}</h2>
    <h1 class="font-bold text-2xl">{{ name }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Documentation
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button
        type="button"
        class="
            text-white
            border-2 border-indigo-600
            bg-indigo-600
            p-2
            rounded-lg
        "
        @click="count++"
    >
        count is: {{ count }}
    </button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
