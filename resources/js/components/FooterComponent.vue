<template>
    <footer class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                <div class="px-5 py-2">
                    <router-link to="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Accueil
                    </router-link>
                </div>
                <div class="px-5 py-2">
                    <router-link to="/prices" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Tarifs
                    </router-link>
                </div>
                <div class="px-5 py-2">
                    <router-link to="/about" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        A Propos
                    </router-link>
                </div>
                <div class="px-5 py-2">
                    <router-link to="/contact" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                        Contact
                    </router-link>
                </div>
            </nav>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                © 2022 Preserva, Inc. All rights reserved.</p>
        </div>
    </footer>
</template>