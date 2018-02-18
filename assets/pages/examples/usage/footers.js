module.exports = {
  sections: [
    {
      id: 'footers',
      title: 'Footers',
      content: `
        <p>You have the ability to have footer rows in the datatable as well. You will need to add a <code>template tag</code> to the "footer" slot. The datatable component will pass the visible rows to a "rows" prop on the slot so that you can use them for any logic if needed.</p>
      `,
      demo: {
        url: '/demonstrations/usage/footers.html',
        height: '500px',
      }
    }
  ]
}
