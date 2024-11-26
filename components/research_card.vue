<template>
    <CardSpotlight class="border-none rounded-full" :gradient-color="isDark ? '#34d399' : '#34d399'" gradientOpacity="0.5">
        <div class="p-8 space-y-3 border-2 border-cyan-600 rounded-xl">
            <img alt="gallery" class="rounded-xl" src="https://dummyimage.com/602x362">

            <h1 class="text-xl font-semibold text-cyan-600">{{ title }}</h1>

            <p class="text-white">
                {{ description }}
            </p>
        </div>
    </CardSpotlight>
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