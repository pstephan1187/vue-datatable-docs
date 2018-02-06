module.exports = {
  sections: [
    {
      id: 'datatable',
      title: 'Datatable',
      content: `
        <p>The datatable component is the main component that you will be using. It controls the display, filtering, and sorting of tabular data. The following attributes will allow you to control the component how you need.</p>
      `,
    },
    {
      id: 'columns',
      title: 'Columns',
      content: `
        <code>&lt;datatable :columns="columns"&gt;</code>

        <p>The columns attribute determines how the datatable will be displayed. This attribute is required and only accepts an array of objects. Each object in the array will describe the individual columns. Each column object accepts the following keys:</p>

        <div class="subsection">
          <h3>label <br><sup>(required)</sup></h3>

          <p>The <code>label</code> key will determine the text that shows in the table header for he given column. The label can be an empty string.</p>
        </div>

        <div class="subsection">
          <h3>field <br><sup>(one of [field, representedAs, or component is required])</sup></h3>

          <p>The <code>field</code> key is the key in the row that will be displayed in the given column. You can also use dot notation to use nested objects as well.</p>
        </div>

        <div class="subsection">
          <h3>representedAs <br><sup>(one of [field, representedAs, or component is required])</sup></h3>

          <p><code>representedAs</code> is a function that accepts the row as an argument and returns a string to be used in the column (along with filtering and sorting).</p>
        </div>

        <div class="subsection">
          <h3>component <br><sup>(one of [field, representedAs, or component is required])</sup></h3>

          <p>Sometimes you need to display something besides just a string in a table cell. In these cases, you will want to use a component. Because the table cannot inherently determing the string that the component will produce, sorting and filtering on these columns is disabled. To re-enable them, use the <code>representedAs</code> field along with the component to tell the datatable how to sort and filter the column.</p>

          <p>The component must have a <code>row</code> prop that accepts an object. The datatable will pass the row data to the component.</p>
        </div>

        <div class="subsection">
          <h3>align</h3>

          <p>The <code>align</code> field will align the text in both the header and body column in the direction defined. It accepts three options: left (default), center, and right.</p>
        </div>

        <div class="subsection">
          <h3>sortable</h3>

          <p>This is a boolean value that determines whether or not that column can be sorted. Sorting is enabled by default on all columns except for component columns. To disable sorting on any particular column, define <code>sortable</code> as <code>false</code>.</p>
        </div>

        <div class="subsection">
          <h3>filterable</h3>

          <p>This is a boolean value that determines whether or not that column should be utilized in filtering. Filtering is enabled by default on all columns except for component columns. To disable filtering on any particular column, define <code>filterable</code> as <code>false</code>.</p>
        </div>
      `,
      examples: [
        {
          id: 'label',
          type: 'javascript',
          label: 'label',
          content: `[{label: 'Username'}]`,
        },
        {
          id: 'field',
          type: 'javascript',
          label: 'field',
          content: `
            [
              {label: 'Username', field: row.username},
              {label: 'First Name', field: row.user.first_name},
            ]
          `,
        },
        {
          id: 'representedAs',
          type: 'javascript',
          label: 'representedAs',
          content: `
            [
              {
                label: 'Address', representedAs: function (row) {
                  return row.address + ', ' + row.city + ', ' + row.state;
                }
              }
            ]
          `,
        },
        {
          id: 'component',
          type: 'javascript',
          label: 'component',
          content: `
            Vue.component('edit-button', {
              template: \`
                        < button class= "btn btn-xs btn-primary" @click="goToUpdatePage" > Edit</button >
                        \`,
              props: [row],
              methods: {
                goToUpdatePage: function(){
                  window.location = '/contact/' + this.row.id + '/update';
                }
              }
            });

            //...

            {
              label: '',
              component: 'edit-button',
              representedAs: function(row){
                // This is only required if you want to enable
                // sorting and filtering on this column
                return row.id;
              }
            }
          `,
        },
        {
          id: 'align',
          type: 'javascript',
          label: 'align',
          content: `[{label: 'Username', align: 'center'}]`,
        },
        {
          id: 'sortable',
          type: 'javascript',
          label: 'sortable',
          content: `[{label: 'ID', sortable: false}]`,
        },
        {
          id: 'filterable',
          type: 'javascript',
          label: 'filterable',
          content: `[{label: 'ID', filterable: false}]`,
        },
      ]
    },
    {
      id: 'data',
      title: 'Data',
      content: `
        <p>This is the data that is represented by each row in the table. It must be an array of objects (or a function that returns an array objects) where each object represents each row in your table. Each key in the objects cooresponds with the <code>field</code>'s in your column declarations.</p>
      `,
      examples: [
        {
          id: 'data-array',
          type: 'javascript',
          label: 'Data as an array',
          content: `
            [
              {
                id: 1,
                first_name: 'John',
                last_name: 'Doe',
                birthdate: '1980-01-24'
              }
            ]
          `,
        },
        {
          id: 'data-function',
          type: 'javascript',
          label: 'Data as a function',
          content: `
            function(){
              return [
                {
                  id: 1,
                  first_name: 'John',
                  last_name: 'Doe',
                  birthdate: '1980-01-24'
                }
              ]
            }
          `,
        },
      ]
    },
    {
      id: 'name',
      title: 'Name',
      content: `
        <p>This allows proper association between tables and paginators when multiple of each are on a single page. The value of this field should match the value of the <code>table</code> field on its associated paginators.</p>
      `
    },
    {
      id: 'filter-by',
      title: 'Filter By',
      content: `
        <p>This is the value by which you want to filter your table by. It will usually point to a variable that is bound to a text input.</p>
      `
    }
  ]
}
