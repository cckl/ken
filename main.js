// const URL = "https://fbr92qejr8.execute-api.us-west-1.amazonaws.com/dev"
const URL = "http://localhost:3000"

$(document).ready(() => {
  const form = $('#form')
  form.on('submit', (e) => {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: URL + '/users',
      data: form.serialize(),
      success: (res) => {
        console.log('res', res)
      },
      error: (error) => {
        console.log('error', error)
      },
    })
  })
})
