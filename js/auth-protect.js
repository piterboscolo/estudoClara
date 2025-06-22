// Proteção de rota para páginas que requerem autenticação
document.addEventListener('DOMContentLoaded', function() {
    // Lista de páginas que não requerem autenticação
    const publicPages = ['login.html', 'register.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Se a página atual não for pública, verifica a autenticação
    if (!publicPages.includes(currentPage)) {
        const currentUser = getCurrentUser();
        
        // Se o usuário não estiver autenticado, redireciona para a página de login
        if (!currentUser) {
            // Armazena a URL atual para redirecionar de volta após o login
            sessionStorage.setItem('redirectAfterLogin', window.location.href);
            window.location.href = 'login.html';
        }
    }
});
