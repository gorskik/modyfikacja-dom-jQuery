$(document).ready(function() {
    $('#moveLastToFirst').on('click', function() {
        const lastParagraph = $('#container p').last();
        $('#container').prepend(lastParagraph);
    });

    $('#moveFirstToLast').on('click' , function() {
        const firstParagraph = $('#container p').first();
        $('#container').append(firstParagraph);
    });

});