<template>
    <div class="code">
        <!-- <div class="bg-black text-grey-light p-4 -m-4 mb-4">
            <div class="select-box">
                <select v-model="show" @change="test">
                    <option value="html">HTML</option>
                    <option value="javascript">Javascript</option>
                </select>
            </div>
        </div> -->
        <affix ref="affix" :relative-element-selector="element" :enabled="!small_window_size" :offset="{top: 60, bottom: 0}">
            <pre v-if="show_code == 'html'" v-highlightjs="comp"><code class="xml"></code></pre>
            <pre v-if="show_code == 'javascript'" v-highlightjs="comp2"><code class="javascript"></code></pre>
        </affix>
    </div>
</template>

<script>
import part1 from '../pages/examples/quick-start/part1.js';

export default {
    props: {
        element: String
    },
    data: () => ({
        comp: part1.html,
        comp2: part1.css,
        small_window_size: false,
        show_code: 'html',
    }),
    methods: {
        detectWindowSize(){
            this.small_window_size =
                (window.innerWidth < 992) ||
                (typeof window.orientation !== "undefined") ||
                (navigator.userAgent.indexOf('IEMobile') !== -1);

            if(this.$refs.affix){
                this.$refs.affix.$el.classList.add('vue-affix');
                this.$refs.affix.affixInitialTop = this.$refs.affix.getOffsetTop(this.$refs.affix.$el);
                this.$refs.affix.topPadding = this.$refs.affix.affixInitialTop - this.$refs.affix.getOffsetTop(this.$refs.affix.relativeElement);
                this.$refs.affix.setDynamicVariables();
                if (this.$refs.affix.scrollAffix){
                    this.$refs.affix.initScrollAffix();
                }
            }
        }
    },
    created(){
        this.detectWindowSize();
        this.show_code = this.$root.show_code;

        this.$root.$on('view-code', function(value){
            console.log('view-code', value);
            this.show_code = value;
        }.bind(this));

        window.addEventListener('resize', this.detectWindowSize);
    }
}
</script>

