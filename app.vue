<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<script>
useHead({
  title: 'Smart Agriculture Lab',
  meta: [
    {
      name: 'description',
      content: 'The Smart Agriculture Laboratory locates in the Farm Power and Machinery Department at the Bangladesh Agricultural University, Mymensingh, Bangladesh. The lab aims to advance knowledge and technologies in smart agriculture and to train the next generation of agricultural engineers.'
    }
  ]
})
useSeoMeta({
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

</script>