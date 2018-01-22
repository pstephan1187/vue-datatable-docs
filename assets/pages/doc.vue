<template>
    <div class="content">
        <h2 class="pb-4">{{ title }}</h2>

        <div :id="section.id" v-for="section in sections" :key="section.id" class="example">
            <div v-html="section.content"></div>

            <component
                v-if="'component' in section"
                :is="section.component.type"
                v-bind="section.component.props"
            ></component>

            <code-example
                :element="'#' + section.id"
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
