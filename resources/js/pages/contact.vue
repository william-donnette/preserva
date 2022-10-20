<script>

export default {
    name: "Contact",
    data() {
        return {
            mail: {
                error: false,
                send: false
            },
            FORM_ENDPOINT: '/api/contact',
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            enterprise: "",
            address: "",
            message: this.$route.query.message ?? "",
        }
    },

    methods: {
        async handleSubmit() {
            try {
                this.mail = {
                    send: false,
                    error: false
                };
                await window.axios.post(this.FORM_ENDPOINT, {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.phone,
                    email: this.email,
                    address: this.address,
                    enterprise: this.enterprise,
                    message: this.message,
                });
                this.mail = {
                    send: true,
                    error: false
                };
            }
            catch (e) {
                this.mail = {
                    send: true,
                    error: true
                };
            }
        },
    },
};

</script>

<template>
    <div class="w-full flex justify-center">

        <!-- component -->
        <form :action="FORM_ENDPOINT" @submit="handleSubmit" method="POST" class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        Pénom
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" name="firstname" type="text" placeholder="Prénom" v-model="firstname">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Nom de Famille
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" name="lastname" type="text" placeholder="Nom" v-model="lastname">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        E-mail
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email" name="email" type="email" v-model="email" placeholder="Adresse email">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Téléphone
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone" name="phone" type="phone" v-model="phone" placeholder="Numéro de Téléphone">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Entreprise
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="enterprise" name="enterprise" v-model="enterprise" placeholder="Nom de votre entreprise">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Adresse
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="address" name="address" v-model="address" placeholder="Adresse de votre entreprise">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Message
                    </label>
                    <textarea
                        class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message" name="message" v-model="message" placeholder="Votre Demande"></textarea>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                    <button
                        class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button" v-on:click="handleSubmit">
                        Envoyer
                    </button>
                    <div v-if="mail.send" class="m-5">
                        <p v-if="mail.error" class="text-red-500 border-red-500 border-2 rounded-md bg-red-200 p-2">Un
                            problème est survenu</p>
                        <p v-else class="text-green-500 border-green-500 border-2 rounded-md bg-green-200 p-2">Mail envoyé
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>