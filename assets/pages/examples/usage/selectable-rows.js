module.exports = {
  sections: [
    {
      id: 'selectable-rows',
      title: 'Selectable Rows',
      content: `
        <p>The datatable component comes pre-packaged with a pager component as well. The pager will automatically look for and discover any datatable components on the page and connect to them. This makes it super simple to add pagination anywhere on your page.</p>

        <div class="alert alert-warning">
          <p><strong>Note</strong>: the pager requires you to register a <code>v-model</code> attribute that points to a data parameter on your vue instance. This parameter must contain your page number. This would typically be <code>1</code> unless you wanted to datatable to load on a different page. See the example for clarification.</p>
        </div>

        <p>The datatable component also supports filtering out of the box. Use the <code>filter-by</code> attribute to filter the data in the table. The filtering works in such a way that each row must contain at least one instance of every word in the filter. For example, if you filter by the text "george 10-11-1980", then any matching rows mush contain both "george" and "10-11-1980". Filtering is case-insensitive.</p>
      `,
      demo: {
        url: '/demonstrations/usage/selectable-rows.html',
        height: '550px',
      }
    }
  ]
}
