module.exports = {
  sections: [
    {
      id: 'usage-custom-template',
      title: 'Custom Template',
      content: `
        <p>The datatable component allows you to completely override the default template for the table rows. This allows you to setup custom visualizations (like row status indicators or expanding rows) while still keeping the provided filtering, sorting, and pagination logic in place. Below is an example of how to setup a table that allows you to expand open rows for more detailed information.</p>

        <div class="alert alert-warning">
          <p><strong>Note:</strong> You will still need to setup your columns and line them up in the same order as the columns in your template otherwise your sorting may get all out of wack.</p>
        </div>
      `,
      demo: {
        url: '/demonstrations/usage/custom-templates.html',
        height: '550px',
      }
    }
  ]
}
