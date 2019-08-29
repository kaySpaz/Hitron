$(document).ready(function() {
    function hideDrops() {
        $('#setup-drop').hide();
        $('#wireless-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    }
    // Large Nav bar drop down
    $('#setup').click(function() {
        $('#setup-drop').show();
        $('#wireless-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#setup-drop').mouseleave(hideDrops);

    $('#wireless').click(function() {
        $('#wireless-drop').show();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#wireless-drop').mouseleave(hideDrops);

    $('#security').click(function() {
        $('#security-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#security-drop').mouseleave(hideDrops);

    $('#access').click(function() {
        $('#access-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#administration-drop').hide();
        $('#status-drop').hide();
    })
    $('#access-drop').mouseleave(hideDrops);

    $('#administration').click(function() {
        $('#administration-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#status-drop').hide();
    })
    $('#administration-drop').mouseleave(hideDrops);

    $('#status').click(function() {
        $('#status-drop').show();
        $('#wireless-drop').hide();
        $('#setup-drop').hide();
        $('#security-drop').hide();
        $('#access-drop').hide();
        $('#administration-drop').hide();
    })
    $('#status-drop').mouseleave(hideDrops);
    $('main').click(hideDrops);
    $('#hamburger').click(function() {
        if ($('#hamburger').hasClass('active')) {
            $('div.mobile-menu').animate({ height: '0%'});
            $('#mobile-container').css('display', 'none');
            $('#hamburger').removeClass('active');
        } else {
            $('div.mobile-menu').animate({ height: '100%'});
            $('#mobile-container').delay(2000).css('display', 'block');
            $('#hamburger').addClass('active');
        }
    });
    $('a#hamburger.active').click(function() {
        $('div.container').animate({ height: '100%'});
        $('#hamburger').removeClass('active');
    });
    $('.link').click(function() {
        alert('Please complete firmware update before continuing');
    });
    $('.header-header').click(function() {
        $('.alert-wrapper').show('fast');
    });
    // x to CLOSE MODAL
    function closeModal() {
        $('.alert-wrapper').hide('fast');
    };
    $('main').click(function() {
        $('.alert-wrapper').hide('fast');
    });
    // Submit function
    $('#submit').click(function() {
        var inputLEN1 = $('#wpa1').val().length;
        var inputLEN2 = $('#wpa2').val().length;
        if($('#check-box').prop("checked") == true) {
            if(inputLEN1 >= 4 && inputLEN2 >= 4) {
                if($('#wpa1').val().toLowerCase() == $('#wpa2').val().toLowerCase()) {
                    if($('#wpa1').val() == $('#wpa2').val()) {
                        $('form').submit();
                        $(document).replace('upgrading.html');
                    } else {
                        $('.alert-statement').html("The pre-shared key's do not match. Capitalisation does not match");
                        $('.alert-wrapper').show('fast');
                        $('.alert-wrapper').delay(3000).hide('fast');
                    }
                } else {
                    $('.alert-statement').html("The pre-shared key's do not match");
                    $('.alert-wrapper').show('fast');
                    $('.alert-wrapper').delay(3000).hide('fast');
                }
           } else {
            $('.alert-statement').html('Please ensure that the pre-shared key meets minimum requirements');
            $('.alert-wrapper').show('fast');
            $('.alert-wrapper').delay(3000).hide('fast');
           }
        } else {
            $('.alert-statement').html('Please check that you have read the terms and conditions');
            $('.alert-wrapper').show('fast');
            $('.alert-wrapper').delay(3000).hide('fast');
        }
    });
});
