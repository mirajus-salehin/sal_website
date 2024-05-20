<template>
    <tr>
        <td scope="row" class="px-6 py-4 font-medium text-white whitespace-nowra">
            {{ articleName }}
        </td>
        <td>
            <a :href="link" target="_blank">
                <button
                    class="px-6 py-2 font-medium tracking-wide text-black hover:text-white transition-colors duration-300 transform bg-white rounded-lg hover:bg-cyan-600">
                    Open article</button>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        articleName: {
            type: String,
            default: () => { }
        },
        link: {
            type: String,
            default: () => { }
        },
    }
}
</script>