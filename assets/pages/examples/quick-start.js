module.exports = {
  title: 'Quick Start',
  sections: [
    {
      id: 'quick-start',
      content: `
        <p>You will need to have Vue registered globally (by using the standard ES5 script tag for Vue or by assigning Vue to <code>window.Vue</code>) and have the datatable component registered (See <a href="/installation">Installation</a>).</p>

        <p>Once you have Vue setup and the datatable component registered, you will need to drop the component where you want the table to display and assign your rows to the <code>data</code> attribute and your columns to the <code>columns</code> attribute (see the example).</p>
      `,
      demo: {
        url: '/demonstrations/quick-start.html',
        height: '800px',
      }
    }
  ]
}
