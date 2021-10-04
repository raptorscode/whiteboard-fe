<script setup>
defineProps({
    image: String,
    title: String,
})
</script>
<template>
    <div class="card flex gap-4">
        <div class="badge">2d 5h</div>
        <!-- image -->
        <img
            :src="image"
            alt="image unavailable"
            class="h-32 w-32 object-cover rounded-xl"
        />
        <div>
            <!-- title -->
            <h2 class="text-xl font-semibold">{{ title }}</h2>
            <hr class="pt-1 rounded-full my-2 w-10 bg-gray-300" />
            <slot></slot>
        </div>
    </div>
</template>
