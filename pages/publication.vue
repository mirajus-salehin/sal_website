<template>
    <section class="px-12">
        <div class="w-full p-20 mx-auto">
            <p class="text-5xl mx-auto text-center text-cyan-50">List of research paper published</p>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-10">
            <table class="w-full text-sm text-left text-white px-10">
                <thead class="text-xs text-white uppercase bg-cyan-600">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Article
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <articleButton v-for="article in researchArticles" :key="article" :articleName="article.articleName"
                        :link="article.link" />

                </tbody>
            </table>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            researchArticles: [{
                articleName: 'Intact Macadamia Nut Quality Assessment Using Near-Infrared Spectroscopy and Multivariate Analysis.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Development and evaluation of solar powered manually operated sprayer cum grasscutter',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Inspection of paddy seed varietal purity using machine vision and multivariate analysis.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Prediction of moisture contents in green peppers using hyperspectral imaging based on a polarized lighting system.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Agricultural mechanization in Bangladesh: status and challenges towards achieving the sustainable development goals (SDGs).',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Hyperspectral imaging technique to evaluate the firmness and the sweetness index of tomatoes.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Postharvest technologies for fruits and vegetables in South Asian countries: a review..',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Quality analysis of stored bell peppers using hyperspectral imaging.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Mapping the pungency of green pepper using hyperspectral imaging. Food Analytical Methods.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Calibration and testing of a Raman hyperspectral imaging system to reveal powdered food adulteration.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Hyperspectral imaging for predicting the allicin and soluble solid content of garlic with variable selection algorithms and chemometric models.',
                link: 'https://www.google.com'
            },
            {
                articleName: '3-D Image reconstruction techniques for plant and animal morphological analysis-a review.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Manufacturing of agricultural machinery in Bangladesh: opportunities and constraints.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Quantitative analysis of Sudan dye adulteration in paprika powder using FT-IR spectroscopy.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Nondestructive estimation of moisture content, pH and soluble solid contents in intact tomatoes using hyperspectral imaging.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Assessment of seed quality using non-destructive measurement techniques: a review.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Classification of fresh and spoiled fish using ultraviolet-visible spectra of eye fluid with multivariate analysis. Engineering in Agriculture, Environment and Food.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Determination of K value for fish flesh with ultraviolet-visible spectroscopy and interval partial least squares (iPLS) regression method.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Prediction of K value for fish flesh based on ultraviolet-visible spectroscopy of fish eye fluid using partial least squares regression.',
                link: 'https://www.google.com'
            },
            {
                articleName: 'Economic parameter of maize sheller for custom hire service in Bangladesh.',
                link: 'https://www.google.com'
            },
            ]
        }
    }
}
</script>