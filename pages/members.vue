<template>
    <section>
        <div class="max-w-lg mx-auto mt-16 md:mt-20">
            <h1 class="text-3xl font-semibold lg:text-4xl text-brand-green text-center">Our lab members</h1>

            <p class="mt-6 text-white text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
            </p>
        </div>
        <div class="container px-6 py-10 mx-auto mt-16 md:mt-28">
            <div class="xl:flex xl:items-center xL:-mx-4 mx-auto">
                <div class="xl:w-1/2 xl:mx-4">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Research
                        Superviser</h1>

                    <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia
                        error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                    <div>
                        <img class="object-cover rounded-xl aspect-square" src="https://dummyimage.com/600x600" alt="">

                        <h1 class="mt-4 text-2xl font-semibold text-brand-green capitalize">John Doe</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Job title</p>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-2xl font-semibold text-center text-white capitalize lg:text-3xl mt-16- md:mt-28">Our <span
                class="text-brand-green">Current students</span></h3>
        <div class="px-10 md:px-20">
            <div class="px-10 mt-16 md:mt-20">
                <p class="text-white">Graduate student</p>
                <hr class="my-6 border-white md:my-8 w-1/2">
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 px-6 py-10 mx-auto">
                <div v-for="member in grad_members" :key="member">
                    <memberCard :name="member.name" :project="member.project" />
                </div>
            </div>
        </div>
        <div class="px-10 md:px-20">
            <div class="px-10 mt-16 md:mt-20">
                <p class="text-white">Undergrade student</p>
                <hr class="my-6 border-white md:my-8 w-1/2">
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 px-6 py-10 mx-auto">
                <div v-for="member in grad_members" :key="member">
                    <memberCard :name="member.name" :project="member.project" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            grad_members: [{
                name: 'John Doe',
                project: 'Prediction of paddy seed viability using machine vision'
            },
            {
                name: 'Jane Doe',
                project: 'Project 2'
            },
            {
                name: 'John Smith',
                project: 'Project 3'
            },
            {
                name: 'Jane Smith',
                project: 'Project 4'
            },
            ]
        }
    }
}
</script>