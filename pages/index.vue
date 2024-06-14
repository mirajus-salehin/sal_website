<template>
    <section class="pt-10">
        <!--hero section-->
        <section>
            <div class="mx-auto h-dvh p-4 section-img">
                <div
                    class="mt-5 md:mt-10 mb-5 text-center h-1/5 py-10 tracking-widest flex flex-col space-y-4 justify-center">
                    <p class="text-2xl font-semibold">Welcome to the</p>
                    <p class="text-3xl md:text-5xl font-extrabold text-cyan-600">Smart Agriculture Laboratory</p>
                </div>
                <p
                    class="px-2 md:px-10 md:w-1/2 mx-auto text-center mt-10 md:mt-20 leading-6 md:leading-8 text-xl md:text-2xl">
                    The Smart Agriculture Laboratory locates in the Farm Power and Machinery Department at the
                    Bangladesh
                    Agricultural University, Mymensingh, Bangladesh. The lab aims to advance knowledge and technologies
                    in
                    smart
                    agriculture and to train the next generation of agricultural engineers.
                </p>
            </div>
        </section>
        <!--empowering section -->
        <section class="mt-20">
            <div class=" text-center space-y-12">
                <div class="text-center text-2xl md:text-3xl font-bold text-cyan-600">
                    Empowering agriculture with
                    <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-red-600">
                        <span class="animate-word col-span-full row-span-full">Machine vision</span>
                        <span class="animate-word-delay-1 col-span-full row-span-full">Spectroscopy</span>
                        <span class="animate-word-delay-2 col-span-full row-span-full">Sensors</span>
                        <span class="animate-word-delay-3 col-span-full row-span-full">Robotics</span>
                        <span class="animate-word-delay-4 col-span-full row-span-full">GIS</span>
                    </div>
                </div>
            </div>

            <UContainer class="flex flex-col md:flex-row justify-center items-center mt-10 px-10">
                <div class="md:w-3/5">
                    <svg1 />
                </div>
                <div class="mx-auto md:w-2/5 align-middle md:h-1/2 leading-6 md:leading-8 text-center">
                    <p>Our lab is committed to quality research and education related to all aspects of smart
                        agriculture.
                        By
                        embracing smart technologies, agriculture is becoming more productive, sustainable, and
                        empowering
                        for farmers around the world. Currently, research topics in the lab include machine vision,
                        spectroscopy, sensor development, agricultural IoT, agricultural robotics, remote sensing and
                        GIS.
                    </p>
                </div>
            </UContainer>
        </section>
        <!--photo section-->
        <!-- component -->
        <section>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-semibold mb-4 text-cyan-600">Photo gallery</h1>
                    <p class="lg:w-2/3 mx-auto">Capturing our moments</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/600x360">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/601x361">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/603x363">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/602x362">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/605x365">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="img-container" src="https://dummyimage.com/606x366">
                            <div class="img-div">
                                <h2 class="tracking-widest text-sm title-font font-medium text-brand-green mb-1">THE
                                    SUBTITLE
                                </h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings
                                    jianbing
                                    microdosing tousled waistcoat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--numbers section-->
        <section class="bg-cyan-600 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div class="text-center">
                        <span class="text-3xl font-bold" id="countUp1">55</span>
                        <p>Reseach paper published</p>
                    </div>
                    <div class="text-center">
                        <span class="text-3xl font-bold">12</span>
                        <p>Conference attended</p>
                    </div>
                    <div class="text-center">
                        <span class="text-3xl font-bold">25</span>
                        <p>Conference procedings</p>
                    </div>
                </div>
            </div>

        </section>
        <div class="py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-white">Farm smarter</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl">Everything you need to
                        modernize agriculture</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget
                        aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra
                        elit nunc.</p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    },
]
</script>
<style scoped>
.section-img {
    @apply bg-[url('assets/images/oooscillate.svg')] bg-cover bg-no-repeat bg-center;
}

.img-container {
    @apply absolute inset-0 w-full h-full object-cover object-center;
}

.img-div {
    @apply px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100;
}


@keyframes word {
    0% {
        transform: translateY(100%);
    }

    15% {
        transform: translateY(-10%);
        animation-timing-function: ease-out;
    }

    20% {
        transform: translateY(0);
    }

    40%,
    100% {
        transform: translateY(-110%);
    }
}

.animate-word {
    animation: word 7s infinite;
}

.animate-word-delay-1 {
    animation: word 7s infinite;
    animation-delay: -1.4s;
}

.animate-word-delay-2 {
    animation: word 7s infinite;
    animation-delay: -2.8s;
}

.animate-word-delay-3 {
    animation: word 7s infinite;
    animation-delay: -4.2s;
}

.animate-word-delay-4 {
    animation: word 7s infinite;
    animation-delay: -5.6s;
}
</style>