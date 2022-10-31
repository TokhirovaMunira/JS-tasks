class Animal {
    name = 'cat';
    move() {
        console.log(`${this.name} is moving`);
    }
}

const cat = new Animal();

cat.move()