var mailString;
function updateMailString() {
    mailString = '?subject=' + encodeURIComponent($('#subject').val())
        + '&body=' + encodeURIComponent($('#message').val());
    $('#mail-link').attr('href',  'mailto:dilpreet.kukreja@gmail.com' + mailString);
}
$( "#subject" ).focusout(function() { updateMailString(); });
$( "#message" ).focusout(function() { updateMailString(); });
updateMailString();