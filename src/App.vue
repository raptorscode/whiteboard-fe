<template>
    <!-- LEFT DRAWER -->
    <nav
        class="
            text-gray-600 text-xl
            font-bold
            bg-gray-100
            md:col-span-1
            lg:col-span-1
            xl:col-span-1
            flex flex-col
            items-end
            pt-32
            pr-4
            gap-2
        "
    >
        <router-link class="link" active-class="link-active" to="/">
            Home
        </router-link>
        <router-link class="link" active-class="link-active" to="/hello">
            Hello
        </router-link>
    </nav>
    <div class="md:col-span-2 lg:col-span-3 xl:col-span-5 flex flex-col">
        <!-- HEADER -->
        <div
            class="
                py-8
                pr-8
                text-black text-xl
                sm:text-2xl
                lg:text-3xl
                font-extrabold
                bg-gray-100
                flex
                justify-between
            "
        >
            <div class="flex flex-row text-gray-700">
                <router-view name="top" />
            </div>
            <div class="text-gray-600 text-xl">
                <router-link
                    class="link"
                    active-class="link-active"
                    to="/signup"
                >
                    SignUp
                </router-link>
                <router-link
                    class="link"
                    active-class="link-active"
                    to="/login"
                >
                    Login
                </router-link>
            </div>
        </div>

        <!-- MAIN PAGE -->
        <main
            class="
                h-full
                p-6
                border
                bg-white
                border-gray-300
                rounded-br-none rounded-5xl
            "
        >
            <router-view />
        </main>
    </div>
</template>
