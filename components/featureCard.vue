<template>
    <CardSpotlight class="border-none rounded-full" :gradient-color="isDark ? '#34d399' : '#34d399'" gradientOpacity="0.5">
    <div class="border-2 border-cyan-600 rounded-xl p-8">
        <h1 class="mt-4 text-xl font-semibold text-cyan-500">
            {{ title }}
        </h1>

        <p class="mt-2 text-white">
            {{ description }}</p>
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