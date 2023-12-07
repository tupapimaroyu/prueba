        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function changeSlide(n) {
            currentSlideIndex = (currentSlideIndex + n + totalSlides) % totalSlides;
            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        }

        setInterval(() => changeSlide(1), 5000); // Cambia automáticamente las imágenes cada 3 segundos

        showSlide(currentSlideIndex);
 