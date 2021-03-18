//Add e removendo a classe '.ativo' de cada section 
function initTabNav() {//isola em uma função
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add('ativo');//define que o primeiro item aparece assim que carrega a pag

    if (tabMenu.length && tabContent.length) {//verifica se a class tabMenu e tabContent existe 
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();


function initAccordion() {
    const Accordionitem = document.querySelectorAll('[data-anime="accordion"] dt');
    const ClassAtivo = 'ativo';//coloco a classe dentro de uma const

    if (Accordionitem.length) {
        Accordionitem[0].classList.add(ClassAtivo);//o primeiro começa aberto
        Accordionitem[0].nextElementSibling.classList.add(ClassAtivo);//o primeiro começa aberto


        function activeAccordion() {
            this.classList.toggle(ClassAtivo);
            this.nextElementSibling.classList.toggle(ClassAtivo);
        }
        Accordionitem.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function HandleLinks(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //Forma alternativa
        //const topo = section.offsetTop;
        //window.scroll({
        //    top:topo,
        //    behavior:'smooth',
        //});
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', HandleLinks);
    });
}

initScrollSuave();

function InitAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const Windowmetade = window.innerHeight * 0.6;

        function Animascroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const Sectionvisible = sectionTop - Windowmetade < 0;
                if (Sectionvisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }

        Animascroll();

        window.addEventListener('scroll', Animascroll);
    }
}

InitAnimacaoScroll();