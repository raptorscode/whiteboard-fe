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
            bg-white
            md:rounded-l-3xl
        "
    >
        <router-view />
    </main>
</template>
