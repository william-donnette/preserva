<script>

export default {
    data() {
        return {
            teams: [
                { img: '/img/1652353665514.jpg', name: 'William Donnette', fonction: 'CEO', date: '2022' },
                { img: '/img/1611236177156.jpg', name: 'Adrien Segura', fonction: 'Chef de Projet', date: '2022' },
                { img: '/img/1591448909695.jpg', name: 'Alexandre Bousquet', fonction: 'Développeur Junior', date: '2022' },
                { img: '/img/1542808752947.jpg', name: 'Davio Viator', fonction: 'Ad Manager', date: '2022' },
                { img: 'https://cdn.discordapp.com/attachments/321941760911736833/1030448231303360513/IMG_20221014_1350112.jpg', name: 'Manil Kesouri', fonction: 'Architecte Logiciel', date: '2022' },
                { img: '/img/1663535196265.jpg', name: 'Samuel Peybernes', fonction: 'Formateur', date: '2022' }
            ]    
        }
    }
}

</script>

<template>
    <section class="w-full py-8 bg-white">
        <div class="max-w-6xl px-12 mx-auto text-center">
            <div class="space-y-12 md:text-center">
                <div class="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 class="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Notre Team</h2>
                    <p class="text-xl text-gray-500">Notre équipe est dévoué à vous former.</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="w-full flex flex-col border border-gray-200 rounded-lg shadow-sm col-span-1 p-10 items-center justify-center" v-for="member in teams">
                        <img class="w-32 h-32 mb-6 rounded-full" :src="member.img">
                        <h2 class="text-lg font-medium">{{member.name}}</h2>
                        <p class="font-medium text-blue-500">{{member.fonction}}</p>
                        <p class="text-gray-400">Team member as of {{member.date}}</p>
                </div>
            </div>
        </div>
    </section>
</template>