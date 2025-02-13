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
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando EmailJS ou outro serviço de email
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
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