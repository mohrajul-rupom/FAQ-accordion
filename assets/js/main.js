$(document).ready(function() {
    $('.fac_accordion_item_content .question_heading').on('click', function() {
        $('.fac_accordion_item_content .question_heading').css({
            'font-weight': '500'
        });
        let current_weight = $(this).css('font-weight');
        if (current_weight === '700' || current_weight === 'bold') { 
            $(this).css({
                'font-weight': '500'
            });
        } else {
            $(this).css({
                'font-weight': '700' 
            });
        }
        $('.fac_accordion_item_content .question_details').not($(this).closest('.fac_accordion_item_content').find('.question_details')).slideUp();
        $('.fac_accordion_item_content .question_heading img').not($(this).find('img')).removeClass('rotated');
        $(this).closest('.fac_accordion_item_content').find('.question_details').slideToggle();
        $(this).find('img').toggleClass('rotated');
    });
});
