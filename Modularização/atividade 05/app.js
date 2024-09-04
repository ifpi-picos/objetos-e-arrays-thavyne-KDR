const userDatabase = require('./userDatabase');

// Adicionando um usuário
userDatabase.addUser('John Doe', 'john.doe@example.com', 'password123');

// Atualizando informações de um usuário
userDatabase.updateUser(1, { name: 'John Smith', email: 'john.smith@example.com' });

// Removendo um usuário
userDatabase.removeUser(1);
