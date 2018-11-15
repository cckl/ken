const URL = 'https://ken-backend.herokuapp.com'
// const URL = 'http://localhost:3000'

$(document).ajaxStart(function () {
    $(document.body).css({ 'cursor': 'wait' })
});
$(document).ajaxComplete(function () {
    $(document.body).css({ 'cursor': 'default' })
});

$(document).ready(() => {
  const form = $('#form')
  const send = $('#send')
  form.on('submit', (e) => {
    e.preventDefault()
    send.prop('disabled', true)
    $.ajax({
      type: 'POST',
      url: URL + '/users',
      data: form.serialize(),
      success: (res) => {
        console.log('res', res)
        alert("Thank you. Your message has been sent and Ken will get back to you shortly!")
        send.prop('disabled', false)
        $('#form')[0].reset()
      },
      error: (error) => {
        console.log('error', error)
        alert("There was an error sending your message. Please ensure you have internet connection and/or refresh the page and try again.")
        send.prop('disabled', false)
      },
    })
  })
})
