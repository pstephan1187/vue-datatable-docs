module.exports = {
  sections: [
    {
      id: 'usage-minimum',
      title: 'Minimum Usage',
      content: `
        <p>The most basic usage for the datatable involves placing the datatable tag in your HTML along with a <code>data</code> attribute for your rows and a <code>columns</code> attribute where you define your columns.</p>

        <p>It is recommended that you store your data and column values on the Vue instance that is controlling the datatable.</p>
      `,
      demo: {
        url: '/demonstrations/usage/minimum.html',
        height: '800px',
      }
    }
  ]
}
