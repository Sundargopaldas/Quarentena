

// Typewriter effect
function typeWriter(elemento, callback) {
    if (!elemento) return;
    const textoOriginal = elemento.innerText.trim(); // Use innerText and trim
    const guru = document.querySelector('.nome-guru');
    
    // Clear initial content
    elemento.innerHTML = '';
    if(guru) guru.innerHTML = ''; 

    function animarTexto() {
        elemento.innerHTML = '';
        if(guru) guru.innerHTML = '';
        
        const textoArray = textoOriginal.split('');
        let i = 0;

        function escrever() {
            if (i < textoArray.length) {
                elemento.innerHTML += textoArray[i];
                i++;
                setTimeout(escrever, 70);
            } else {
                // Animation finished
                if (callback) callback();
                // Restart after delay
                setTimeout(animarTexto, 4000);
            }
        }
        escrever();
    }
    
    animarTexto();
}

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Video Modal Logic
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            const button = event.relatedTarget;
            // Extract info from data-* attributes
            const videoId = button.getAttribute('data-video-id');
            const videoTitle = button.getAttribute('data-video-title');
            
            // Update the modal's content.
            const modalTitle = videoModal.querySelector('.modal-title');
            const modalIframe = videoModal.querySelector('iframe');
            
            modalTitle.textContent = videoTitle;
            modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        });

        videoModal.addEventListener('hide.bs.modal', function (event) {
            const modalIframe = videoModal.querySelector('iframe');
            modalIframe.src = ''; // Stop video
        });
    }

    // Start Typewriter
    const titulo = document.querySelector('.frase1');
    const guru = document.querySelector('.nome-guru');

    if (titulo) {
        typeWriter(titulo, function() {
            if (guru) {
                guru.style.opacity = 0;
                guru.innerHTML = 'S.B.S Govinda Dev Goswami Maharaj';
                // Simple fade in effect
                let op = 0.1;
                let timer = setInterval(function () {
                    if (op >= 1){
                        clearInterval(timer);
                    }
                    guru.style.opacity = op;
                    guru.style.filter = 'alpha(opacity=' + op * 100 + ")";
                    op += op * 0.1;
                }, 10);
            }
        });
    }

    // Handle Trivikrama Image (Converted to Modal)
    setTimeout(function() {
        const modalElement = document.getElementById('modalFlyerTrivikrama');
        if (modalElement) {
            const modalFlyer = new bootstrap.Modal(modalElement);
            modalFlyer.show();
        }
    }, 3000);

    // Close mobile menu on click
    const navLinks = document.querySelectorAll(".nav-link");
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const closeBtn = document.getElementById("btn-Fechar");
    
    // Function to close menu
    const closeMenu = () => {
        if (offcanvasElement && offcanvasElement.classList.contains('show')) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
    };

    // Close on link click
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close on button click (Manual Force)
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent double-firing with native bootstrap
            closeMenu();
        });
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('d-none');
                backToTopBtn.classList.add('d-block');
            } else {
                backToTopBtn.classList.remove('d-block');
                backToTopBtn.classList.add('d-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});