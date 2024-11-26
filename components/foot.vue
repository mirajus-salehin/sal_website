<template>
    <!-- component -->
    <footer class="bg-cyan-600">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2 mdplace-items-center">
                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#"
                            class="footer-links">Home</a>
                        <a href="#"
                            class="footer-links">Who
                            We Are</a>
                        <a href="#"
                            class="footer-links">Our
                            Philosophy</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Useful links</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="https://bau.edu.bd" target="_blank"
                            class="footer-links">Bangladesh Agricultural University</a>
                        <a href="https://aet.bau.edu.bd" target="_blank"
                            class="footer-links">Faculty of Agricultural Engineering & Technology</a>
                        <a href="https://fpm.bau.edu.bd" target="_blank"
                            class="footer-links">Department of Farm Power and Machinery</a>
                    </div>
                </div>
            </div>

            <hr class="my-6 border-white md:my-8">

            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="w-auto h-10" src="/assets/images/logo_full_bw.svg" alt="">
                </a>

                <div class="flex -mx-2">
                    <p>
                        All rights reserved &copy; SAL 2024
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>

a{
    text-decoration: none;
}
.footer-links{
    @apply mx-2 transition-colors duration-300 ease-in hover:font-bold;
}
</style>