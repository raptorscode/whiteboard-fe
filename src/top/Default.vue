<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const routeName = computed(() => route.name)
</script>
<template>{{ routeName }}</template>
