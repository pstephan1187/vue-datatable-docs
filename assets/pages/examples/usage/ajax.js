module.exports = {
  sections: [
    {
      id: 'ajax',
      title: 'AJAX',
      content: `
        <p>Vue.js Datatable allows you to pass a function to the <code>data</code> attribute as opposed to an array. This allows you to override the base functionality of the datatable to allow for more advanced or customized situations. This can include fetching data from an API via AJAX.</p>

        <p>Below you will find an example where data is queried from the SpaceX database on previous launches.</p>

        <p>For any datatable where a function is passed to the <code>data</code> attribute, that function is called anytime there is a change to the filter, sorting, pagination, or column properties. 2 arguments are passed to the function everytime it is called. The first is an object that contains the necessary information to pull the rows needed:</p>

        <ul>
          <li><strong>filter</strong> - The value passed to the <code>filter-by</code> attribute.</li>
          <li><strong>sort_by</strong> - The column that will be used for sorting.</li>
          <li><strong>sort_dir</strong> - The direction by which you will sort the rows.</li>
          <li><strong>page_length</strong> - The number of rows to show at once.</li>
          <li><strong>page_number</strong> - The page number that you want to display.</li>
        </ul>

        <p>The second argument is a callback function that must be called to set the rows on the table. It takes 2 arguments. The first are the rows that you want displayed on the table, and the second is the total number of rows taking filtering (but not pagination) into effect.</p>
      `,
      demo: {
        url: '/demonstrations/usage/ajax.html',
        height: '520px',
      }
    }
  ]
}
