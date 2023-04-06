$('#setAnonymous').change(function () {
    if (this.checked) {
        $('#sender_name').attr('disabled', 'disabled')
    } else {
        $('#sender_name').removeAttr('disabled')
    }
});
