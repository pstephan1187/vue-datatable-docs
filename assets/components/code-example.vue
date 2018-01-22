<template>
    <div class="code">
        <affix ref="affix" :relative-element-selector="element" :style="{width: affix_width + 'px'}" :enabled="!small_window_size" :offset="offset">
            <div class="bg-black text-grey-light p-4 mb-4">
                <div class="select-box">
                    <select v-model="show_code" @change="resetAffix">
                        <option
                            v-for="example in examples"
                            :key="example.type"
                            :value="example.type"
                        >{{ example.type_label }}</option>
                    </select>
                </div>
            </div>


            <pre
                v-for="example in examples"
                :key="example.type"
                v-if="show_code == example.type"
                v-highlightjs="example.content"
            ><code :class="example.type_class"></code></pre>
        </affix>
    </div>
</template>

<script>
export default {
    props: {
        element: String,
        examples: Array,
    },
    data: () => ({
        small_window_size: false,
        show_code: 'html',
        affix_width: 0,
    }),
    computed: {
        offset(){
            if(this.small_window_size){
                return {top: 0, bottom: 0};
            }

            return {top: 59, bottom: 59};
        }
    },
    methods: {
        detectWindowSize(){
            this.small_window_size =
                (window.innerWidth < 992) ||
                (typeof window.orientation !== "undefined") ||
                (navigator.userAgent.indexOf('IEMobile') !== -1);

            this.resetAffix(true);
            this.setAffixWidth();
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
    mounted(){
        this.detectWindowSize();

        window.addEventListener('resize', this.detectWindowSize);
    }
}
</script>

