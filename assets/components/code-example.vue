<template>
    <div class="code">
        <affix ref="affix" :relative-element-selector="element" :style="{width: affix_width + 'px'}" :enabled="!small_window_size" :offset="{top: 0, bottom: 0}">
            <div class="flex justify-between items-center bg-black text-grey-light p-4">
                <div class="select-box">
                    <select v-model="show_code" @change="resetAffix">
                        <option
                            v-for="example in examples"
                            :key="example.id"
                            :value="example.id"
                        >{{ example.label }}</option>
                    </select>
                </div>
                <div v-if="example && example.url">
                    <a :href="example.url" target="_blank" class="bg-grey-dark text-black rounded border-2 border-grey-light p-link hover:bg-grey-darker">
                        <i class="fa fa-external-link"></i>
                    </a>
                </div>
            </div>


            <pre
                v-for="example in examples"
                :key="example.id"
                v-if="show_code == example.id"
                v-highlightjs="example.content"
            ><code :class="example.type"></code></pre>
        </affix>
    </div>
</template>

<script>
// const stripIndent = require('strip-indent');

export default {
    props: {
        element: String,
        examples: Array,
    },
    data: () => ({
        small_window_size: false,
        show_code: null,
        affix_width: 0,
    }),
    computed: {
        example(){
            let filtered_examples =  this.examples.filter(function(example){
                return example.id == this.show_code;
            }.bind(this));

            if(filtered_examples.length > 0){
                return filtered_examples[0];
            }

            return null;
        }
    },
    methods: {
        handleWindowSize(){
            this.small_window_size =
                (window.innerWidth < 992) ||
                (typeof window.orientation !== "undefined") ||
                (navigator.userAgent.indexOf('IEMobile') !== -1);
        },
        resetAffix(ignore_styles){
            ignore_styles = typeof ignore_styles == 'boolean' && ignore_styles;

            if(!ignore_styles && this.$el){
                var affix = this.$el.querySelector('.affix');
                affix.classList = [];
                affix.removeAttribute("style");
            }

            if(this.$refs.affix){
                this.$refs.affix.$el.classList.add('vue-affix');
                this.$refs.affix.affixInitialTop = this.$refs.affix.getOffsetTop(this.$refs.affix.$el);
                this.$refs.affix.topPadding = this.$refs.affix.affixInitialTop - this.$refs.affix.getOffsetTop(this.$refs.affix.relativeElement);
                this.$refs.affix.setDynamicVariables();

                if (this.$refs.affix.scrollAffix){
                    this.$refs.affix.initScrollAffix();
                }
            }
        },
        setAffixWidth(){
            this.affix_width = this.$el.offsetWidth;
        }
    },
    created(){
        if(this.examples.length > 0){
            this.show_code = this.examples[0].id;
        }
    },
    mounted(){
        this.handleWindowSize();
        this.setAffixWidth();

        window.addEventListener('resize', function(){
            this.handleWindowSize();
            this.setAffixWidth();
            this.resetAffix(true);
        }.bind(this));
    }
}
</script>
