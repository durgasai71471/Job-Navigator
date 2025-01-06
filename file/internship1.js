function navigateToDomains(branch) {
    localStorage.setItem('selectedBranch', branch);
    window.location.href = 'internship2.html';
}

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
