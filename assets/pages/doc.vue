<template>
    <div class="content">
        <h2 class="pb-4">{{ title }}</h2>

        <div
            v-for="section in parsed_sections"
            :id="section.id"
            :key="section.id"
            class="example"
        >
            <div v-html="section.content"></div>

            <iframe
                v-if="'demo' in section"
                :src="section.demo.url"
                :style="{width: '100%', height: section.demo.height}"
            ></iframe>

            <code-example
                v-if="'examples' in section"
                :element="'#' + section.id"
                :examples="section.examples"
            ></code-example>
        </div>
    </div>
</template>

<script>
const stripIndent = require('strip-indent');

export default {
    props: {
        title: String,
        sections: Array
    },
    data: () => ({
        parsed_sections: []
    }),

    methods: {
        parseSections(){
            for(var section of this.sections){
                this.parseSection(section);
            }
        },
        parseSection(section){
            if('demo' in section){
                this.parseSectionDemo(section);

                return;
            }

            for(var i in section.examples){
                var example = section.examples[i];

                if(!'id' in example){
                    example.id = example.type;
                }
            }

            this.parsed_sections.push(section);
        },
        parseSectionDemo(section){
            section.examples = [];

            axios.get(section.demo.url).then(function(response){
                let parser = new DOMParser();
                let doc = parser.parseFromString(response.data, "text/html");

                let examples = doc.querySelectorAll('[data-example]');

                for(let example of examples){
                    let parsed_example = JSON.parse(example.dataset.example);

                    var section_example = {
                        type: parsed_example.type,
                        label: parsed_example.label,
                        content: stripIndent(example.innerHTML),
                    }

                    if('id' in parsed_example){
                        section_example.id = parsed_example.id;
                    }else{
                        section_example.id = parsed_example.type;
                    }

                    section.examples.push(section_example);
                }

                this.parsed_sections.push(section);
            }.bind(this));
        }
    },
    created(){
        this.parseSections();
    }
}
</script>
