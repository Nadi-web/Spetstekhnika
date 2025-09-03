window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}
// mob menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const callBtnDesktop = document.querySelector('.call-btn-desktop');
    const desktopMenu = document.querySelector('.menu');

    function updateMenuState(isOpen) {
        if (isOpen) {
            menuBtn.textContent = 'закрыть';
            mobileMenu.style.display = 'flex';
        } else {
            menuBtn.textContent = 'меню';
            mobileMenu.style.display = 'none';
        }
    }

    menuBtn.addEventListener('click', function () {
        const isMenuOpen = mobileMenu.style.display === 'flex';
        updateMenuState(!isMenuOpen);
    });

});



// text animation
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addAnimation() {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');
    
    swiftUpElements.forEach(elem => {
        if (isElementInViewport(elem) && !elem.classList.contains('animated')) {
            elem.classList.add('animated');

            const words = elem.textContent.split(' ');
            elem.innerHTML = words.map(word => `<em><i>${word}</i></em>`).join(' ');

            const children = elem.querySelectorAll('em > i');
            children.forEach((node, index) => {
                node.style.animationDelay = `${index * 0.1}s`;
            });
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.call-btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            const currentURL = window.location.href;

         
                document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });

                window.location.href = '#contact-us';
        });
    });
});




window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

document.addEventListener('DOMContentLoaded', function() {

    const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const button = document.getElementById('video-btn');
    const targetSection = document.getElementById('video-section');

    button.addEventListener('click', function() {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//form
    const TOKEN = "7193284443:AAFc5R_-vGAzFRuNdq3KMsOu_W-V9Z71ojA";
    const CHAT_ID = "-1002162592990";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    document.getElementById("tg").addEventListener('submit', function (e) {
        e.preventDefault();

        let name = this.name.value.trim();
        let phone = this.phone.value.trim();
        let comment = this.comment.value.trim();

        if (!name || !phone) {
            alert("Пожалуйста, заполните обязательные поля: Имя и Номер телефона.");
            return;
        }

        let message = '<strong>Новая заявка!</strong>\n\n';
        message += `<i>Имя: </i> <b>${name}</b>\n`;
        message += `<i>Телефон: </i> <b>${phone}</b>\n`;
        message += `<i>Комментарий: </i> <b>${comment}</b>\n`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            alert("Ваше сообщение успешно отправлено!");
            this.name.value = "";
            this.phone.value = "";
            this.comment.value = "";
        })
        .catch((err) => {
            console.log(err);
            alert("Произошла ошибка при отправке сообщения. Попробуйте еще раз.");
        })
        .finally(() => {
            console.log("Done");
        });
    });





// sliders

document.addEventListener('DOMContentLoaded', function () {
    function setupSlider(sliderId, prevButtonId, nextButtonId) {
        const slidesContainer = document.getElementById(sliderId);
        const slides = slidesContainer.querySelectorAll('.slide');
        let currentIndex = 0;

        function getSlideWidth() {
            return slides[0].offsetWidth; 
        }

        function showSlide(index) {
            if (index >= slides.length) {
                currentIndex = 0; 
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }

            const slideWidth = getSlideWidth();
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        document.getElementById(prevButtonId).addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        document.getElementById(nextButtonId).addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        showSlide(currentIndex);

        window.addEventListener('resize', () => {
            showSlide(currentIndex); 
        });
    }

    setupSlider('portfolio-slides', 'portfolio-prev', 'portfolio-next'); 
    setupSlider('reviews-slides', 'reviews-prev', 'reviews-next'); 
});



// revs
document.addEventListener('DOMContentLoaded', function () {
    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal .close");

    function showImageInModal(imageUrl) {
        modalImg.src = imageUrl;
        modal.style.display = "block";
    }

    const reviews = document.querySelectorAll(".rev");
    reviews.forEach(review => {
        review.addEventListener('click', function () {
            const bgImage = getComputedStyle(this).backgroundImage;
            const imageUrl = bgImage.slice(5, -2); 
            showImageInModal(imageUrl);
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});




var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#bg").css("background-size","150% auto");
    }else{
        $("#bg").css("background-size","100% auto");        
    }
}
};