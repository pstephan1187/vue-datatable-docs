module.exports = {
  sections: [
    {
      id: 'pager',
      title: 'Pager',
      content: `
        <p>The pager component controls the paging of the datatable (who knew?). It will determine how many items will display at a time and which page to display. Below are the following attributes that it accepts.</p>
      `,
    },
    {
      id: 'v-model',
      title: 'v-model',
      content: `
        <p>This should bind to the currently selected page.</p>
      `,
    },
    {
      id: 'table',
      title: 'table',
      content: `
        <p>This should match the <code>name</code> attribute of the table the paginator should control. This is handled automatically for the first table on the page and can be ignored as long as no more than one table is on a page (unless for some reason you want the paginator to control both tables).</p>
      `
    },
    {
      id: 'type',
      title: 'type',
      content: `
        <p>This controls the type of paginator to display. 3 types are currently supported: long (default), abbreviated, and short.</p>
      `
    },
    {
      id: 'per-page',
      title: 'per-page',
      content: `
        <p>This determines how many rows should be displayed per page. Defaults to 10.</p>
      `
    },
  ]
}
