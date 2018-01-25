<template>
    <div class="content">
        <div
            v-for="section in parsed_sections"
            :id="section.id"
            :key="section.id"
            class="example"
        >
            <h2 v-if="section.title" class="pb-4">{{ section.title }}</h2>

            <div v-html="section.content"></div>

            <iframe
                v-if="section.demo.url"
                :src="section.demo.url"
                :style="{width: '100%', height: section.demo.height}"
            ></iframe>

            <code-example
                v-if="section.examples.length > 0"
                :element="'#' + section.id"
                :examples="section.examples"
            ></code-example>
        </div>
    </div>
</template>

<script>
import Section from "../js/section.js";

export default {
    props: {
        title: String,
        sections: Array
    },
    data: () => ({
        parsed_sections: []
    }),
    created(){
        this.parsed_sections = this.sections.map(function(section){
            return new Section(section);
        }.bind(this));
    }
}
</script>
