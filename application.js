$(document).ready(function() {
	$('#resumeAll').hide();
    $('#show').on('click', function() {
        $('#resumeAll').slideDown('slow');
        $('button').remove();

    });
});