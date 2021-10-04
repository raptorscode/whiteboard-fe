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
            pt-20
            pr-4
            gap-2
        "
    >
        <router-link
            class="
                hover:bg-blue-400 hover:text-white
                px-4
                py-2
                transition
                duration-200
                rounded-xl
                w-1/2
                text-right
            "
            active-class="text-white bg-blue-500 hover:bg-blue-500 hover:text-white transition duration-0"
            to="/"
            >Home</router-link
        >
        <router-link
            class="
                hover:bg-blue-400 hover:text-white
                px-4
                py-2
                transition
                duration-200
                rounded-xl
                w-1/2
                text-right
            "
            active-class="text-white bg-blue-500 hover:bg-blue-500 hover:text-white transition duration-0"
            to="/hello"
            >Hello</router-link
        >
        <!-- <router-link class="hover:text-black" to="/users">Users</router-link> -->
    </nav>
    <div class="md:col-span-2 lg:col-span-3 xl:col-span-5 flex flex-col">
        <!-- HEADER -->
        <div
            class="
                p-4
                text-black text-xl
                sm:text-2xl
                lg:text-3xl
                font-extrabold
                bg-gray-100
                flex
                justify-between
            "
        >
            / <router-view name="top" />
            <div class="text-gray-600 text-xl">
                <!-- <router-link class="hover:text-black" to="/signup">
                SignUp
            </router-link>
            <router-link class="hover:text-black" to="/login">
                Login
            </router-link> -->
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
                rounded-3xl rounded-br-none
            "
        >
            <router-view />
        </main>
    </div>
</template>
