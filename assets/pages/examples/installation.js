module.exports = {
  sections: [
    {
      id: 'es5',
      title: 'Installation',
      content: `
        <h3>ES5</h3>

        <p>You can install Vue.js Datatable via a standard script tag.</p>
      `,
      examples: [
        {
          id: 'html',
          type: 'html',
          label: 'HTML',
          content: `
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.js"></script>
            <script src="/dist/vuejs-datatable.js"></script>
          `,
        }
      ]
    },
    {
      id: 'es6',
      content: `
        <h3>ES6</h3>

        <p>If you are going the ES6 route, you can install the script via NPM or Yarn.</p>
        <p>Once installed, you will need to import the <code>DatatableFactory</code> object and register it with vue.</p>
      `,
      examples: [
        {
          id: 'npm',
          type: 'shell-session',
          label: 'NPM',
          content: `npm install vuejs-datatable`,
        },
        {
          id: 'yarn',
          type: 'shell-session',
          label: 'Yarn',
          content: `yarn add vuejs-datatable`,
        },
        {
          id: 'javascript',
          type: 'javascript',
          label: 'Javascript',
          content: `
            import Vue from 'vue';
            import DatatableFactory from 'vuejs-datatable';

            Vue.use(DatatableFactory);
          `,
        }
      ]
    }
  ]
}
