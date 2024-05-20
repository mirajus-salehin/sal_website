<template>
    <div class="p-4">
        <UCard>
            <template #header>
                <img class="w-full rounded" :src="img" alt="" />
            </template>
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 dark:text-gray-300">
                {{ description }}
            </p>
        </UCard>
    </div>
</template>
<script>
    export default {
        props:{
            title: String,
            description: String,
            img: String
        }
    };
</script>