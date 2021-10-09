<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div
        class="
            bg-pattern
            h-full
            flex
            items-center
            justify-center
            py-12
            px-4
            sm:px-6
            lg:px-8
        "
    >
        <div class="max-w-md w-full space-y-8 glass p-8 rounded-3xl">
            <div class="flex flex-nowrap items-end justify-between">
                <h2 class="text-center text-3xl font-extrabold text-gray-900">
                    Register
                </h2>
                <svg class="text-black w-12 h-12">
                    <use href="src/assets/icon.svg#icon" />
                </svg>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="name" class="sr-only">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            required=""
                            class="
                                appearance-none
                                rounded-none
                                relative
                                block
                                w-full
                                px-3
                                py-2
                                border border-gray-300
                                placeholder-gray-500
                                text-gray-900
                                rounded-t-lg
                                focus:outline-none
                                focus:ring-gray-500
                                focus:border-gray-500
                                focus:z-10
                                sm:text-sm
                            "
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label for="email-address" class="sr-only"
                            >Email address</label
                        >
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="
                                appearance-none
                                rounded-none
                                relative
                                block
                                w-full
                                px-3
                                py-2
                                border border-gray-300
                                placeholder-gray-500
                                text-gray-900
                                focus:outline-none
                                focus:ring-gray-500
                                focus:border-gray-500
                                focus:z-10
                                sm:text-sm
                            "
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="
                                appearance-none
                                rounded-none
                                relative
                                block
                                w-full
                                px-3
                                py-2
                                border border-gray-300
                                placeholder-gray-500
                                text-gray-900
                                focus:outline-none
                                focus:ring-gray-500
                                focus:border-gray-500
                                focus:z-10
                                sm:text-sm
                            "
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label for="confirm-password" class="sr-only"
                            >Confirm Password</label
                        >
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="confirm-password"
                            autocomplete="current-password"
                            required=""
                            class="
                                appearance-none
                                rounded-none
                                relative
                                block
                                w-full
                                px-3
                                py-2
                                border border-gray-300
                                placeholder-gray-500
                                text-gray-900
                                rounded-b-lg
                                focus:outline-none
                                focus:ring-gray-500
                                focus:border-gray-500
                                focus:z-10
                                sm:text-sm
                            "
                            placeholder="Confirm Password"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="
                                h-4
                                w-4
                                text-gray-800
                                focus:ring-gray-500
                                border-gray-300
                                rounded
                            "
                        />
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a
                            href="#"
                            class="
                                font-medium
                                text-gray-800
                                hover:text-gray-500
                            "
                        >
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div class="flex justifybetween">
                    <div></div>
                    <button
                        type="submit"
                        class="
                            group
                            relative
                            w-full
                            flex
                            justify-center
                            py-2
                            px-4
                            border border-transparent
                            text-sm
                            font-medium
                            rounded-lg
                            text-white
                            bg-gray-800
                            hover:bg-gray-900
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-gray-500
                        "
                    >
                        <span
                            class="
                                absolute
                                left-0
                                inset-y-0
                                flex
                                items-center
                                pl-3
                            "
                        >
                            <LockClosedIcon
                                class="
                                    h-5
                                    w-5
                                    text-gray-500
                                    group-hover:text-gray-400
                                "
                                aria-hidden="true"
                            />
                        </span>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'

export default {
    components: {
        LockClosedIcon,
    },
}
</script>

<style scoped>
/* sorry... */

.bg-pattern {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
