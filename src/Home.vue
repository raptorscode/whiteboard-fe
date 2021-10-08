<template>
    <div class="p-4 flex flex-col">
        <p class="mb-4"><b>user.name:</b> {{ user }}</p>
        <div class="flex">
            <input
                v-model="newName"
                type="text"
                class="p-2 mr-4 border-2 border-purple-600 rounded-xl"
            />
            <button
                @click="saveName"
                class="
                    text-white
                    border-2 border-purple-600
                    bg-purple-600
                    py-2
                    px-4
                    rounded-xl
                "
            >
                Submit
            </button>
        </div>
    </div>
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
