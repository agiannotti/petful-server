const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const cats = pets.cats.all();
    const dogs = pets.dogs.all();
    return { cats, dogs };
  },

  getDog() {
    return pets.dogs.show();
  },

  getCat() {
    return pets.cats.show();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      pets.cats.dequeue();
    } else if (type === 'dog') {
      pets.dogs.dequeue();
    } else {
      return;
    }
  },
};
