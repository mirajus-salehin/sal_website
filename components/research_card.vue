<template>
    <div class="p-8 space-y-3 border-2 border-cyan-600 hover:border-black hover:text-brand-black rounded-xl transition-all duration-300 ease-in hover:bg-brand-400">
        <img alt="gallery" class="rounded-xl" src="https://dummyimage.com/602x362">

        <h1 class="text-xl font-semibold text-cyan-600">{{ title }}</h1>

        <p class="text-white">
            {{ description }}
        </p>

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    }
}
</script>