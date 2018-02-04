module.exports = {
  sections: [
    {
      id: 'multiple-tables',
      title: 'Multiple Tables',
      content: `
        <p>Vue.js Datatables fully supports having multiple tables on the same page. There is one thing you will need to take care of though, otherwise your tables might start acting a little wonky.</p>

        <p>When the datatable and the pager are detected on the same page, a little magic takes place to connect the two components so that they can communicate with each other. If you have multiple tables/pagers on the same page, the pagers don't know which tables to communicate and visa-versa.</p>

        <p>To handle this, you will need to manually sync up any pagers and datatables (other than the first pair) that need to communicate with each other. You do this by adding a <code>name</code> attribute to your table and a <code>table</code> attribute to your pager(s) with the same value.</p>
      `,
      demo: {
        url: '/demonstrations/usage/multiple-tables.html',
        height: '1150px',
      }
    }
  ]
}
