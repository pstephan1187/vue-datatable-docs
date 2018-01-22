module.exports = {
  title: 'Quick Start',
  sections: [
    {
      id: 'quick-start',
      content: `
<p>Use the component in your HTML or template. Then pass in the columns and the data to your Vue instance.</p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel magna venenatis, pharetra turpis eget, faucibus odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ultrices ipsum mi, vel dignissim nisl rhoncus at. Nullam interdum leo sed dictum vestibulum. Vivamus venenatis nibh eget dui pellentesque, nec pulvinar turpis gravida. Nullam ut porttitor mi. Phasellus ornare laoreet tempus. Donec molestie orci quis dolor mattis, lobortis lacinia erat commodo. Curabitur volutpat, justo ut ultrices condimentum, ex lectus laoreet nulla, at eleifend lectus leo non lectus. In hac habitasse platea dictumst. Quisque vulputate convallis urna a faucibus. Etiam mollis vestibulum risus nec blandit. Nam et dui arcu. Mauris volutpat porttitor elementum. </p>`,
      component: {
        type: 'datatable',
        props: {
          data: require('../users.js'),
          columns: [
            { label: 'ID', field: 'id', align: 'center', filterable: false },
            { label: 'Username', field: 'user.username' },
            { label: 'First Name', field: 'user.first_name' },
            { label: 'Last Name', field: 'user.last_name' },
            { label: 'Email', field: 'user.email', align: 'right', sortable: false },
            {
              label: 'Address', representedAs: function (row) {
                return row.address + ', ' + row.city + ', ' + row.state;
              }, align: 'right', sortable: false
            },
          ]
        }
      },
      examples: [
        {
          type: 'html',
          type_label: 'HTML',
          type_class: 'xml',
          content: `<datatable :columns="columns" :data="rows"></datatable>`,
        },
        {
          type: 'javascript',
          type_label: 'Javascript',
          type_class: 'javascript',
          content: require('./javascript.js'),
        }
      ]
    }
  ]
}
