const frm = $('#form')
// const URL = "http://localhost:3000"
const URL = "https://fbr92qejr8.execute-api.us-west-1.amazonaws.com/dev"

// function fun(item1, item) {
//   console.log(item1.price)
// }

frm.on('submit', function(e) {
  e.preventDefault()
  $.ajax({
    type: 'POST',
    url: URL + '/users',
    data: frm.serialize(),
    success: function(res) {
      console.log('succ', res)
    },
    error: function(error) {
      console.log('error', error)
    },
  })
})
