
class Animal {
  constructor(nome) {
      this.nome = nome;
  }

  fazerSom() {
      console.log(`${this.nome} faz um som.`);
  }
}


class Cachorro extends Animal {
  fazerSom() {
      console.log(`${this.nome} late.`);
  }
}


class Gato extends Animal {
  fazerSom() {
      console.log(`${this.nome} mia.`);
  }
}


const cachorro1 = new Cachorro('Rex');
const gato1 = new Gato('Mia');
const cachorro2 = new Cachorro('Max');


cachorro1.fazerSom();
gato1.fazerSom();     
cachorro2.fazerSom(); 
