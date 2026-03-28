/**
 * 3Click Live Chat Bubble
 * Dynamically injects a floating chat bubble into the page.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Prevent duplicate bubbles
    if (document.querySelector('.live-chat-bubble')) return;

    // Create the bubble element
    const chatBubble = document.createElement('div');
    chatBubble.className = 'live-chat-bubble';
    chatBubble.id = 'liveChatBubble';
    
    // Simple Chat SVG Icon
    chatBubble.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    `;

    // Add click event (placeholder for live chat initialization)
    chatBubble.addEventListener('click', function() {
        console.log('Live Chat: Abrindo chat de suporte...');
        // Opcional: Adicionar um efeito visual ao clicar
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
            alert('Suporte 3Click: Estamos conectando você a um atendente...');
        }, 150);
    });

    // Inject into body
    document.body.appendChild(chatBubble);
});
