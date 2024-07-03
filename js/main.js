$(document).ready(function() {
    // Smooth scrolling for links
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        
        // Dummy authentication for demonstration purposes
        if (email === 'manju@gmail.com' && password === 'password') {
            window.location.href = 'profile.html';
        } else {
            $('#errorAlert').removeClass('d-none');
        }
    });
});

