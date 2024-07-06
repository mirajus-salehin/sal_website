<template>
    <section class="p-4 md:px-12">
        <div class="w-full p-4 md:p-20 mx-auto">
            <p class="text-2xl md:text-5xl md:mx-auto text-center text-cyan-50">List of research paper published</p>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-10">
            <table class="w-full text-sm text-left text-white p-2 md:px-10">
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
                link: 'https://doi.org/10.1016/j.jfca.2021.104033'
            },
            {
                articleName: 'Development and evaluation of solar powered manually operated sprayer cum grasscutter',
                link: 'https://doi.org/10.5455/faa.51838'
            },
            {
                articleName: 'Inspection of paddy seed varietal purity using machine vision and multivariate analysis.',
                link: 'https://doi.org/10.1016/j.jafr.2021.100109'
            },
            {
                articleName: 'Prediction of moisture contents in green peppers using hyperspectral imaging based on a polarized lighting system.',
                link: 'https://doi.org/10.7744/kjoas.20200083'
            },
            {
                articleName: 'Agricultural mechanization in Bangladesh: status and challenges towards achieving the sustainable development goals (SDGs).',
                link: 'https://kyushu-u.elsevierpure.com/en/publications/agricultural-mechanization-in-bangladesh-statusand-challenges-tow'
            },
            {
                articleName: 'Hyperspectral imaging technique to evaluate the firmness and the sweetness index of tomatoes.',
                link: 'https://doi.org/10.7744/kjoas.20180075'
            },
            {
                articleName: 'Postharvest technologies for fruits and vegetables in South Asian countries: a review.',
                link: 'https://doi.org/10.7744/kjoas.20180050'
            },
            {
                articleName: 'Quality analysis of stored bell peppers using hyperspectral imaging.',
                link: 'https://doi.org/10.1117/12.2307709'
            },
            {
                articleName: 'Mapping the pungency of green pepper using hyperspectral imaging. Food Analytical Methods.',
                link: 'https://doi.org/10.1007/s12161-018-1275-1'
            },
            {
                articleName: 'Calibration and testing of a Raman hyperspectral imaging system to reveal powdered food adulteration.',
                link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0195253'
            },
            {
                articleName: 'Hyperspectral imaging for predicting the allicin and soluble solid content of garlic with variable selection algorithms and chemometric models.',
                link: 'https://doi.org/10.1002/jsfa.9006'
            },
            {
                articleName: '3-D Image reconstruction techniques for plant and animal morphological analysis-a review.',
                link: 'https://doi.org/10.5307/JBE.2017.42.4.339'
            },
            {
                articleName: 'Manufacturing of agricultural machinery in Bangladesh: opportunities and constraints.',
                link: 'https://www.researchgate.net/publication/317578656_Manufacturing_of_agricultural_machinery_in_Bangladesh_Opportunities_and_constraints'
            },
            {
                articleName: 'Quantitative analysis of Sudan dye adulteration in paprika powder using FT-IR spectroscopy.',
                link: 'https://pubmed.ncbi.nlm.nih.gov/28277181/'
            },
            {
                articleName: 'Nondestructive estimation of moisture content, pH and soluble solid contents in intact tomatoes using hyperspectral imaging.',
                link: 'https://www.mdpi.com/2076-3417/7/1/109'
            },
            {
                articleName: 'Assessment of seed quality using non-destructive measurement techniques: a review.',
                link: 'https://www.cambridge.org/core/journals/seed-science-research/article/assessment-of-seed-quality-using-nondestructive-measurement-techniques-a-review/CA4DAA31C7642A0BC38AD944448BCCC9'
            },
            {
                articleName: 'Classification of fresh and spoiled fish using ultraviolet-visible spectra of eye fluid with multivariate analysis. Engineering in Agriculture, Environment and Food.',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S1881836615300045'
            },
            {
                articleName: 'Determination of K value for fish flesh with ultraviolet-visible spectroscopy and interval partial least squares (iPLS) regression method.',
                link: 'https://doi.org/10.1016/j.biosystemseng.2015.10.004'
            },
            {
                articleName: 'Prediction of K value for fish flesh based on ultraviolet-visible spectroscopy of fish eye fluid using partial least squares regression.',
                link: 'https://doi.org/10.1016/j.compag.2015.07.018'
            },
            {
                articleName: 'Economic parameter of maize sheller for custom hire service in Bangladesh.',
                link: 'https://www.researchgate.net/publication/279752900_Economic_parameter_of_maize_sheller_for_custom_hire_service_in_Bangladesh'
            },
            {
                articleName: 'Jute retting process: present practice and problems in Bangladesh.',
                link: 'https://core.ac.uk/download/pdf/39324578.pdf'
            },
            {
                articleName: 'Improvement and evaluation of star-cum-cono weeder for wetland.',
                link: 'https://www.researchgate.net/publication/277892211_Improvement_and_evaluation_of_Star-cum-cono_weeder_for_wetland'
            },
            {
                articleName: 'Financial management for custom hire service of tractor in Bangladesh.',
                link: 'https://ijabe.org/index.php/ijabe/article/view/792'
            },
            {
                articleName: 'Effect of fiber diameter on properties of compression molded flax fiber-reinforced biocomposites.',
                link: 'https:doi.org/10.5923/j.cmaterials.20130305.02'
            },
            {
                articleName: 'Development and evaluation of a star-cum-cono weeder for wet lands.',
                link: 'https://www.researchgate.net/publication/236960681_Development_and_Evaluation_of_a_Star-cum-Cono_Weeder_for_Wet_Lands'
            },
            {
                articleName: 'Municipal solid waste mapping of Mymensingh Town using GIS Arcview.',
                link: 'https://www.academia.edu/38247749/Municipal_Solid_Waste_Mapping_of_Mymensingh_Town_Using_Gis_Arcview'
            },
            {
                articleName: 'Physio-mechanical properties of compression molded fine flax fiber-reinforced composite.',
                link: 'https://www.researchgate.net/publication/236960638_Physio-Mechanical_Properties_of_Compression_Molded_Fine_Flax_Fiber-Reinforced_Composite'
            },
            {
                articleName: 'Post-harvest losses in mango value chain.',
                link: 'https://www.researchgate.net/publication/236673140_POST-HARVEST_LOSSES_IN_MANGO_VALUE_CHAIN#:~:text=The%20total%20loss%20due%20to,and%20dendritic%20spot%20(2%25).'
            },
            {
                articleName: 'Selection of Minimum Cost Inputs for Boro Rice Cultivation in Bangladesh.',
                link: 'https://www.researchgate.net/publication/236960585_Selection_of_Minimum_Cost_lnputs_for_Boro_Rice_Cultivation_in_Bangladesh'
            },
            ]
        }
    }
}
</script>