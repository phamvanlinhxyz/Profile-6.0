// Slick slide
$(document).ready(function () {
    $(".wrap").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});

// Change cover fb
const coverInput = document.getElementById("addCover");
const coverImg = document.getElementById("coverImg");
coverInput.addEventListener("change", (event) => {
    URL.revokeObjectURL(coverImg.src);
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    coverImg.src = file.preview;
    event.target.value = null;
});
