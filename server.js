const net = require('net');

const list = ['pizza', 'macarronada']; // lista com produtos iniciais

//funções que o usuário pode utilizar
class Controller {
  // lista todos os produtos disponíveis
  listAll() {
    return console.log(list);
  }
  addList(){
    campo = 'chocolate';
    list.push(campo);
    return socket.write('+OK\n');
  }
}

const controller = new Controller(); // uma instância do Controller

const handleConnection = (socket) => {
  console.log('Alguem se conectou.');
  socket.on('end', () => {
    console.log('desconectou');
  });

  socket.on('data', (data) => {
    const str = data.toString();
    // se o usuário escrever "end", saíra do servidor
    if (str === 'end') {
      socket.end();
    }
    // se o usuário escrever "liste", listará todos os produtos
    if (str === 'liste') {
      controller.listAll();
    }
    if (str == 'adicione'){
      controller.addList();
    }
  });
};

const server = net.createServer(handleConnection);
server.listen(4000, '127.0.0.1');

module.exports = Controller;
