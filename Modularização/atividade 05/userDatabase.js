const userDatabase = (() => {
  
  const users = [];

  function addUser(name, email, password) {
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    console.log(`Usuário ${name} adicionado com sucesso.`);
  }

  function removeUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      
      console.log(`Usuário com ID ${id} removido com sucesso.`);
    } else {
      console.log(`Usuário com ID ${id} não encontrado.`);
    }
  }

  function updateUser(id, newInfo) {
    const user = users.find(user => user.id === id);
    if (user) {
      Object.assign(user, newInfo);
      console.log(`Usuário com ID ${id} atualizado com sucesso.`);
    } else {
      console.log(`Usuário com ID ${id} não encontrado.`);
    }
  }

  return {
    addUser,
    removeUser,
    updateUser
  };
})();

module.exports = userDatabase;
