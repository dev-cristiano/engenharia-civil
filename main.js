// Initialize Lucide icons
lucide.createIcons();

// Dados detalhados dos projetos
const projectsData = [
    {
        id: 1,
        title: "Residencial Alto Padrão",
        category: "residencial",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Casa moderna com 400m²",
        fullDescription: "Projeto residencial de alto padrão com arquitetura contemporânea, integrando conforto, funcionalidade e sustentabilidade. A residência conta com sistemas inteligentes de automação e materiais de primeira qualidade.",
        area: "400m²",
        duration: "18 meses",
        location: "Alphaville, SP",
        client: "Família Silva",
        year: "2023",
        features: [
            "4 suítes com closet",
            "Piscina com deck",
            "Garagem para 4 carros",
            "Sistema de automação",
            "Jardim paisagístico",
            "Área gourmet completa"
        ],
        gallery: [
            "https://plus.unsplash.com/premium_photo-1674035036549-67b8ad6d0be3?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        title: "Edifício Comercial",
        category: "comercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Prédio de x andares no centro",
        fullDescription: "Edifício comercial moderno localizado no centro financeiro da cidade, projetado para oferecer máxima eficiência energética e conforto aos usuários. Certificação LEED Gold.",
        area: "12.000m²",
        duration: "36 meses",
        location: "Centro, SP",
        client: "Incorporadora ABC",
        year: "2022",
        features: [
            "x andares + subsolo",
            "Certificação LEED Gold",
            "Sistema VRF de climatização",
            "Fachada em vidro duplo",
            "Heliponto",
            "Estacionamento para 200 vagas"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        title: "Galpão Industrial",
        category: "industrial",
        image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Estrutura de 2000m²",
        fullDescription: "Complexo industrial projetado para operações logísticas de grande porte, com estrutura metálica de alta resistência e sistemas automatizados de movimentação de cargas.",
        area: "2.000m²",
        duration: "12 meses",
        location: "Distrito Industrial, SP",
        client: "Logística XYZ",
        year: "2023",
        features: [
            "Estrutura metálica",
            "Pé direito de 12m",
            "Ponte rolante 20 toneladas",
            "Sistema anti-incêndio",
            "Doca para 8 caminhões",
            "Escritórios administrativos"
        ],
        gallery: [
            "https://plus.unsplash.com/premium_photo-1674035036549-67b8ad6d0be3?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1715783058283-2e31a1cb7684?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1730215159668-1d8bb50c7c92?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    },
    {
        id: 4,
        title: "Condomínio Residencial",
        category: "residencial",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Complexo com 50 unidades",
        fullDescription: "Condomínio residencial de médio padrão com foco em qualidade de vida e sustentabilidade. Projeto contempla áreas de lazer completas e infraestrutura moderna.",
        area: "x.000m²",
        duration: "24 meses",
        location: "Zona Sul, SP",
        client: "Construtora DEF",
        year: "2022",
        features: [
            "50 apartamentos",
            "Piscina adulto e infantil",
            "Quadra poliesportiva",
            "Playground",
            "Salão de festas",
            "Academia completa"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1635107625030-ea216e1ce6dd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 5,
        title: "Shopping Center",
        category: "comercial",
        image: "https://images.unsplash.com/photo-1519143587129-d7ae992bc44c?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Centro comercial moderno",
        fullDescription: "Shopping center de grande porte com conceito inovador de sustentabilidade e experiência do cliente. Projeto integra tecnologia, conforto e eficiência operacional.",
        area: "45.000m²",
        duration: "48 meses",
        location: "Zona Oeste, SP",
        client: "Shopping Investimentos",
        year: "2021",
        features: [
            "200 lojas",
            "Praça de alimentação",
            "Cinema multiplex",
            "Estacionamento 1.500 vagas",
            "Área de eventos",
            "Certificação ambiental"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1558636479-6552d446dd1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1547035902-4508bd7d58f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1656151496659-d56190b745b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    },
    {
        id: 6,
        title: "Conjunto Residencial Jardim das Flores",
        category: "residencial",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        description: "Conjunto de casas residenciais modernas",
        fullDescription: "Projeto de um conjunto habitacional planejado, composto por casas térreas e sobrados, priorizando conforto, segurança e integração com áreas verdes. Cada unidade foi projetada para aproveitar ao máximo a iluminação natural e a ventilação cruzada, garantindo eficiência energética.",
        area: "8.000m²",
        duration: "24 meses",
        location: "Campinas, SP",
        client: "Incorporadora Alpha",
        year: "2023",
        features: [
            "Casas de 2 e 3 dormitórios",
            "Área de lazer com playground e quadra",
            "Paisagismo integrado",
            "Sistema de segurança 24h",
            "Estacionamento privativo",
            "Eficiência energética e iluminação natural"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1626290131022-4e5a5e167173?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
            "https://images.unsplash.com/photo-1683402967722-917fdd774f30?q=80&w=1027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    }

];

let currentProjectIndex = 0;
let currentImageIndex = 0;
let filteredProjects = projectsData;

// Gerar cards de projetos
function generateProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer';
        card.setAttribute('data-category', project.category);
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="project-image w-full h-48 object-cover">
                <span class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm capitalize">${project.category}</span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-3">${project.description}</p>
                <button class="text-blue-600 hover:text-blue-700 font-medium">Ver detalhes →</button>
            </div>
        `;

        card.addEventListener('click', () => openProjectModal(project.id));
        projectsGrid.appendChild(card);

        // Animar entrada do card
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Reinitialize icons
    lucide.createIcons();
}

// Abrir modal do projeto
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    currentProjectIndex = filteredProjects.findIndex(p => p.id === projectId);
    currentImageIndex = 0;

    // Preencher dados do modal
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-area').textContent = project.area;
    document.getElementById('modal-duration').textContent = project.duration;
    document.getElementById('modal-location').textContent = project.location;
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-description').textContent = project.fullDescription;

    // Preencher características
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'flex items-center text-gray-600';
        li.innerHTML = `<i data-lucide="check" class="h-4 w-4 text-green-500 mr-2"></i>${feature}`;
        featuresList.appendChild(li);
    });

    // Configurar galeria de imagens
    setupImageGallery(project.gallery);

    // Atualizar contador
    document.getElementById('project-counter').textContent = `${currentProjectIndex + 1} de ${filteredProjects.length}`;

    // Mostrar modal
    document.getElementById('project-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reinitialize icons
    lucide.createIcons();
}

// Configurar galeria de imagens
function setupImageGallery(images) {
    const mainImage = document.getElementById('modal-main-image');
    const thumbnails = document.getElementById('image-thumbnails');

    mainImage.src = images[0];

    thumbnails.innerHTML = '';
    images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image;
        thumb.className = `w-16 h-16 object-cover rounded cursor-pointer ${index === 0 ? 'ring-2 ring-blue-500' : ''}`;
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateMainImage(images);
        });
        thumbnails.appendChild(thumb);
    });
}

// Atualizar imagem principal
function updateMainImage(images) {
    const mainImage = document.getElementById('modal-main-image');
    const thumbnails = document.querySelectorAll('#image-thumbnails img');

    mainImage.src = images[currentImageIndex];

    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('ring-2', 'ring-blue-500');
        } else {
            thumb.classList.remove('ring-2', 'ring-blue-500');
        }
    });
}

// Event listeners do modal
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') closeModal();
});

document.getElementById('prev-image').addEventListener('click', () => {
    const project = filteredProjects[currentProjectIndex];
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : project.gallery.length - 1;
    updateMainImage(project.gallery);
});

document.getElementById('next-image').addEventListener('click', () => {
    const project = filteredProjects[currentProjectIndex];
    currentImageIndex = currentImageIndex < project.gallery.length - 1 ? currentImageIndex + 1 : 0;
    updateMainImage(project.gallery);
});

document.getElementById('prev-project').addEventListener('click', () => {
    const newIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : filteredProjects.length - 1;
    openProjectModal(filteredProjects[newIndex].id);
});

document.getElementById('next-project').addEventListener('click', () => {
    const newIndex = currentProjectIndex < filteredProjects.length - 1 ? currentProjectIndex + 1 : 0;
    openProjectModal(filteredProjects[newIndex].id);
});

// Fechar modal
function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        mobileMenu.classList.add('hidden');
    });
});

// Project filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => {
            b.classList.remove('filter-active');
            b.classList.add('filter-inactive');
        });
        btn.classList.remove('filter-inactive');
        btn.classList.add('filter-active');

        // Filter projects
        if (filter === 'todos') {
            filteredProjects = projectsData;
        } else {
            filteredProjects = projectsData.filter(project => project.category === filter);
        }

        generateProjectCards();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Gerar cards iniciais
    generateProjectCards();

    // Configurar observer para outros elementos
    setTimeout(() => {
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});