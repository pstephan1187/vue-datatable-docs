<template>
    <div class="content">
        <h2 class="pb-4">{{ title }}</h2>

        <div :id="section.id" v-for="section in sections" :key="section.id" class="example">
            <div v-html="section.content"></div>

            <iframe
                v-if="'demo' in section"
                :src="section.demo.url"
                :style="{width: '100%', height: section.demo.height}"
            ></iframe>

            <code-example
                v-if="'demo' in section"
                :element="'#' + section.id"
                :demo-url="section.demo.url"
                :examples="section.examples"
            ></code-example>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        sections: Array
    },
    data: () => ({
    })
}
</script>
