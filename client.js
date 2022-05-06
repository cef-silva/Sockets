const net = require('net');
const readline = require('readline');

const client = new net.Socket();

// interface para saída e entrada de dados que o usuário escrever
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(4000, '127.0.0.1', () => {
  console.log('conectou');
  rl.addListener('line', (line) => {
    client.write(line);
  });
});
