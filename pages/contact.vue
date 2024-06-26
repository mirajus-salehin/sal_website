<template>
    <section class="mt-16 md:mt-20 mb-20">
        <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Contact us</h1>

            <p class="mt-6 text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
            </p>

            <div class="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-lg px-4">
                <form class="flex flex-col p-2">
                    <label for="username" class="text-sm text-white my-4">Your email</label>
                    <input type="email" placeholder="Email address"
                        class="mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700  " />
                    <label for="message" class="text-sm text-white my-4">Message</label>
                    <textarea placeholder="Write your message here"
                        class="mt-2 w-full placeholder-gray-400/70 rounded-lg border border-brand-green bg-white px-4 h-32 py-2.5 text-gray-600"></textarea>
                    <button
                        class="flex items-center justify-center px-4 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-brand-400">
                        <span class="mx-1">Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>