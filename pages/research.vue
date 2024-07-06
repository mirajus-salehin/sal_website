<template>
    <section>
        <!--hero section-->
        <section class="p-2 md:px-10">
            <UContainer class="mx-auto p-4">
                <div class="mt-10 mb-5 text-center h-1/5 py-10 tracking-widest flex flex-col space-y-4 justify-center">
                    <p class="text-xl lg:text-3xl font-semibold text-white">Sustainable Agriculture for Bangladesh</p>
                    <p class="text-3xl lg:text-5xl font-extrabold text-cyan-600">Our Research Commitment</p>
                </div>
            </UContainer>
            <UContainer class="grid grid-cols-1 mt-8 xl:mt-12 gap-10 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div v-for="research in researches" :key="research">
                    <research_card :title="research.title" :description="research.description" />
                </div>
            </UContainer>
        </section>

        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Bring your research to the <span class="text-cyan-600">next level.</span>
            </h2>

            <p class="max-w-4xl mt-6 text-center text-white">
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
            </p>

            <div class="inline-flex w-full mt-6 sm:w-auto">
                <a href="#"
                    class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-cyan-600 rounded-lg hover:bg-red-600 focus:ring-opacity-80">
                    See our publications
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            researches: [
                {
                    title: 'Machine Vision',
                    description: 'Machine vision is the technology and methods used to provide imaging-based automatic inspection and analysis for such applications as automatic inspection, process control, and robot guidance, usually in industry.',
                    link: '#'
                },
                {
                    title: 'Spectroscopy',
                    description: 'Spectroscopy is the study of the interaction between matter and electromagnetic radiation. Historically, spectroscopy originated through the study of visible light dispersed according to its wavelength, by a prism.',
                    link: '#'
                },
                {
                    title: 'Sensors',
                    description: 'A sensor is a device that detects events or changes in quantities and provides a corresponding output, generally as an electrical or optical signal; for example, a thermocouple converts temperature to an output voltage.',
                    link: '#'
                },
                {
                    title: 'Robotics',
                    description: 'Robotics is an interdisciplinary research area at the interface of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe.',
                    link: '#'
                },
                {
                    title: "Agricultural robots",
                    description: "Agricultural robots are robots deployed for agricultural purposes. Today, they are used in at least one aspect of farming. Agricultural robots are developed for various agricultural applications such as harvesting, picking, pruning, weeding, spraying, seeding, planting, sorting, and repackaging.",
                    link: "#"
                },
                {
                    title: 'GIS',
                    description: 'A geographic information system (GIS) is a system designed to capture, store, manipulate, analyze, manage, and present all types of geographical data. The key word to this technology is Geography – this means that some portion of the data is spatial. In other words, data that is in some way referenced to locations on the earth.',
                    link: '#'
                }
            ]
        }
    }
}
</script>
