module.exports = {
  sections: [
    {
      id: 'custom-headers',
      title: 'Custom Headers',
      content: `
        <p>The header columns are customizeable in the datatable component. Instead of using a simple label, you can use a custom component.</p>

        <p>Define a global component and then pass the name to a <code>headerComponent</code> field in your columns definition. In the following example we use a "select all" checkbox as a header component.</p>
      `,
      demo: {
        url: '/demonstrations/usage/custom-headers.html',
        height: '500px',
      }
    }
  ]
}
