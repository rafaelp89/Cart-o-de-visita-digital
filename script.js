// SCRIPT GERAL DO CARTÃO INTERATIVO

document.addEventListener('DOMContentLoaded', () => {
    // COMENTÁRIO: SCRIPT JS BÁSICO
    console.log("Cartão de Visita Digital Carregado com Sucesso!");

    // Exemplo de interação simples (opcional): 
    // Adicionar analytics ou tracking de cliques aqui se necessário futuramente.

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Adiciona a classe de animação
            button.classList.add('animate-jump');

            // Remove a classe após a animação terminar para poder clicar de novo
            button.addEventListener('animationend', () => {
                button.classList.remove('animate-jump');
            }, { once: true });

            console.log(`Você clicou em: ${button.textContent.trim()}`);
        });
    });
});
