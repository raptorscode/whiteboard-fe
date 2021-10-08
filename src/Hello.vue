<script setup>
import { ref } from 'vue'
import card from './components/card.vue'

const count = ref(0)
</script>

<template>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        <card
            title="Recommended IDE setup:"
            image="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        >
            <p>
                <a href="https://code.visualstudio.com/" target="_blank"
                    >VSCode</a
                >
                +
                <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                    >Volar</a
                >
            </p>

            <p>
                <a
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                >
                    Vite Documentation
                </a>
                |
                <a href="https://v3.vuejs.org/" target="_blank"
                    >Vue 3 Documentation</a
                >
            </p>
        </card>
        <card
            title="Nothing:"
            image="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        >
            Empty
        </card>
        <card
            image="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        >
        </card>
    </div>

    <button
        type="button"
        class="
            text-white
            active:bg-indigo-700
            hover:bg-indigo-500
            border-2 border-indigo-600
            bg-indigo-600
            p-2
            fixed
            bottom-4
            right-4
            rounded-lg
        "
        @click="count++"
    >
        count is: {{ count }}
    </button>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
