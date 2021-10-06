<template>
    <p class="mb-4">User: {{ user }}</p>
    <input
        v-model="newName"
        type="text"
        class="p-2 mr-4 border-2 border-indigo-600 rounded-lg"
    />
    <button
        @click="saveName"
        class="
            text-white
            border-2 border-indigo-600
            bg-indigo-600
            p-2
            rounded-lg
        "
    >
        Submit
    </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const user = computed(() => store.state.user.name)

const newName = ref('')
function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/hello')
}
</script>
