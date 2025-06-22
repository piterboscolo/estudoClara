// Função para registrar um novo usuário
function registerUser(username, password) {
    // Verifica se o usuário já existe
    const users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        return { success: false, message: 'Nome de usuário já existe' };
    }
    
    // Adiciona o novo usuário (em um ambiente real, a senha deve ser hasheada)
    users.push({ username, password });
    localStorage.setItem('quizUsers', JSON.stringify(users));
    
    return { success: true, message: 'Usuário registrado com sucesso!' };
}

// Função para autenticar um usuário
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('quizUsers') || '[]');
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Armazena o usuário atual na sessão
        sessionStorage.setItem('currentUser', JSON.stringify({ username }));
        return { success: true, message: 'Login bem-sucedido!' };
    }
    
    return { success: false, message: 'Usuário ou senha incorretos' };
}

// Função para verificar se o usuário está logado
function isAuthenticated() {
    return sessionStorage.getItem('currentUser') !== null;
}

// Função para fazer logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Função para obter o usuário atual
function getCurrentUser() {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}
