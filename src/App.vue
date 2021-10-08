<template>
    <!-- LEFT DRAWER -->
    <nav
        class="
            tabs
            my-auto
            text-gray-600 text-xl
            font-bold
            bg-gray-100
            md:col-span-1
            lg:col-span-1
            xl:col-span-1
            flex flex-col
            justify-center
            items-end
            pt-4
            pr-4
            relative
            gap-2
        "
        style="height: min-content"
    >
        <router-link
            class="link tabs-item z-10"
            exact-active-class="link-active active"
            to="/signup"
        >
            Sign Up
        </router-link>
        <router-link
            class="link tabs-item z-10"
            exact-active-class="link-active active"
            to="/signin"
        >
            Sign In
        </router-link>
        <router-link
            class="link tabs-item z-10"
            exact-active-class="link-active active"
            to="/"
        >
            Home
        </router-link>
        <router-link
            class="link tabs-item z-10"
            exact-active-class="link-active active"
            to="/hello"
        >
            Hello
        </router-link>
        <span
            class="
                tab-item-animate
                rounded-xl
                bg-indigo-600
                transition-transform
                duration-200
            "
        ></span>
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
            rounded-3xl rounded-br-none rounded-tr-none
        "
    >
        <router-view />
    </main>
</template>
