// Efeito de digitação para o texto da hero section
const text = "Desenvolvedor Full Stack";
const typingText = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = '';
            i = 0;
            typeWriter();
        }, 2000);
    }
}

// Controle da tela de loading
window.addEventListener('load', () => {
    // Aguarda um tempo mínimo para mostrar a animação de loading
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        const content = document.querySelector('.content');
        
        // Fade out da tela de loading
        loadingScreen.style.opacity = '0';
        
        // Mostra o conteúdo
        content.classList.add('loaded');
        
        // Remove a tela de loading após a animação
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
        
        // Inicia as outras funções
        typeWriter();
        createProjectCards();
    }, 2000); // 2 segundos de loading
});

// Projetos exemplo (você pode modificar ou adicionar mais)
const projects = [
    {
        title: 'Projeto Steam Dataset',
        description: 'Análise e manipulação de dados da plataforma Steam usando estruturas de dados avançadas.',
        technologies: ['Java', 'Estruturas de Dados', 'Análise de Dados'],
        github: 'https://github.com/matheusvctor/Projeto-LEDA---Steam-Dataset',
        demo: '#'
    },
    {
        title: 'Factory Method',
        description: 'Implementação do padrão de projeto Factory Method com exemplos práticos.',
        technologies: ['Java', 'Design Patterns', 'OOP'],
        github: 'https://github.com/matheusvctor/Factory-Method',
        demo: '#'
    },
    {
        title: 'HTML Site Project',
        description: 'Site responsivo desenvolvido com HTML e CSS moderno.',
        technologies: ['HTML', 'CSS', 'Responsive Design'],
        github: 'https://github.com/matheusvctor/HTML-Site-Projetct',
        demo: '#'
    }
];

// Função para criar os cards dos projetos
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">GitHub</a>
                ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Smooth scroll para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            from_name: this.querySelector('input[type="text"]').value,
            from_email: this.querySelector('input[type="email"]').value,
            message: this.querySelector('textarea').value,
            to_email: 'matheusrochamil203@gmail.com'
        };

        // Mostrar loading
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Enviar e-mail usando EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar mensagem:', error);
                alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            });
    });
}

// Adicionar classe active na navegação quando scrollar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Função para verificar elementos visíveis durante o scroll
function checkVisibility() {
    const elements = document.querySelectorAll('.timeline');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Elemento é considerado visível quando 30% dele está na tela
        const isVisible = (elementTop < windowHeight - (windowHeight * 0.3)) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// Inicializa as animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Verifica visibilidade inicial após um pequeno delay
    setTimeout(() => {
        checkVisibility();
    }, 500);

    // Inicializa particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#e81cff' // Cor primária do site
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#40c9ff', // Cor secundária do site
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

// Listener para o scroll com debounce para melhor performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        checkVisibility();
    });
});

// Controle do menu mobile
const menuButton = document.querySelector('.menu-button');
const menuLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuButton.innerHTML = menuLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 