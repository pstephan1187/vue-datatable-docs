module.exports = `new Vue({
  el: "#vue-element",
  data: {
    table_columns: [
      {label: 'id', field: 'id'},
      {label: 'Username', field: 'user.username'},
      {label: 'First Name', field: 'user.first_name'},
      {label: 'Last Name', field: 'user.last_name'},
      {label: 'Email', field: 'user.email'},
      {label: 'address', representedAs: function(row){
        return row.address + '<br />' + row.city + ', ' + row.state;
      }, interpolate: true}
    ],
    table_rows: [
      //...
      {
        "id": 1,
        "user": {
          "username": "dprice0",
          "first_name": "Daniel",
          "last_name": "Price",
          "email": "dprice0@blogs.com"
        },
        "address": "3 Toban Park",
        "city": "Pocatello",
        "state": "Idaho"
        }
      //...
    ]
  }
});`;
