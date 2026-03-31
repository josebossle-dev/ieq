const menu = document.getElementById('menu-mobile');
        const hero = document.getElementById('hero');
        const sections = document.querySelectorAll('main section:not(#hero)');
        const btnAbrir = document.getElementById('btn-abrir');
        const btnFechar = document.getElementById('btn-fechar');
        const links = document.querySelectorAll('.link-mobile');

        // Abre o Menu
        btnAbrir.onclick = () => menu.classList.remove('translate-x-full');

        // Fecha o Menu e volta para o Hero (Botão Sair)
        btnFechar.onclick = () => {
            if (window.innerWidth < 768) {
                hero.classList.remove('hidden');
                sections.forEach(s => s.classList.add('hidden'));
            }
            menu.classList.add('translate-x-full');
            window.scrollTo(0,0);
        };

        // Navegação entre "telas" no Mobile
        links.forEach(link => {
            link.onclick = (e) => {
                const targetId = link.getAttribute('href');
                
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    // Esconde Hero e todas as seções
                    hero.classList.add('hidden');
                    sections.forEach(s => s.classList.add('hidden'));
                    
                    // Mostra apenas a clicada
                    const targetSection = document.querySelector(targetId);
                    targetSection.classList.remove('hidden');
                    
                    // Fecha menu e rola pro topo
                    menu.classList.add('translate-x-full');
                    window.scrollTo(0,0);
                }
            };
        });