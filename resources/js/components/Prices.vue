<template>
    <section
        class="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24 tails-selected-element">
        <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900">
                <h2
                    class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                    Nos Tarifs
                </h2>
                <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                    Nous avons des plages tarifaires en fonction de la taille de votre entreprise.
                </p>
            </div>
            <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3"
                data-primary="blue-600" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div
                    class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3
                        class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Petite Entreprise
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        &#8804; 10 salariés
                    </p>
                    
                    <div
                        class="flex items-end justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <div class="flex flex-col">
                            <p class="line-through text-red-500">699.99€</p>
                            <p
                            class="text-green-700 box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            499<span class="text-xs">.99</span>€
                        </p>
                        </div>
                        
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            par jour
                        </p>
                    </div>
                    <router-link to="/contact?message=Je souhaite faire un devis pour une petite entreprise."
                        class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                        data-primary="blue-600" data-rounded="rounded-md">
                        Sélectionner
                    </router-link>
                </div>
                <div
                    class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:py-12">
                    <h3
                        class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Moyenne Entreprise
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        &#8804; 50 salariés
                    </p>
                    <div
                        class="flex items-end justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <div class="flex flex-col">
                            <p class="line-through text-red-500">1699.99€</p>
                            <p
                            class="text-green-700 box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            999<span class="text-xs">.99</span>€
                        </p>
                        </div>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            par jour
                        </p>
                    </div>
                    <router-link to="/contact?message=Je souhaite faire un devis pour une moyenne entreprise."
                        class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                        data-primary="blue-600" data-rounded="rounded-md">
                        Sélectionner
                    </router-link>
                </div>
                <div
                    class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3
                        class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Grande Entreprise
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        {{'>'}} 50 salariés
                    </p>
                    <div
                        class="flex items-end justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <div class="flex flex-col">
                            <p class="line-through opacity-0">1699.99€</p>
                            <p
                            class="text-gray-600 box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            Sur Devis
                        </p>
                        </div>
                    </div>
                    <router-link to="/contact?message=Je souhaite faire un devis pour une grande entreprise."
                        class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg"
                        data-primary="blue-600" data-rounded="rounded-md">
                        Sélectionner
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
