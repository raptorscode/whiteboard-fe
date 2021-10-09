<template>
    <!-- LEFT DRAWER -->
    <nav class="nav my-auto">
        <router-link class="link" exact-active-class="link-active" to="/signin">
            Login
        </router-link>
        <router-link class="link" exact-active-class="link-active" to="/signup">
            Register
        </router-link>
        <router-link class="link" exact-active-class="link-active" to="/">
            Home
        </router-link>
        <router-link class="link" exact-active-class="link-active" to="/hello">
            Hello
        </router-link>
        <span class="link-anime"></span>
    </nav>
    <!-- MAIN PAGE -->
    <main
        class="
            h-full
            md:col-span-2
            lg:col-span-3
            xl:col-span-5
            flex flex-col
            overflow-auto
            bg-pattern
            md:rounded-l-3xl
        "
    >
        <router-view />
    </main>
</template>

<style scoped>
.bg-pattern {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
