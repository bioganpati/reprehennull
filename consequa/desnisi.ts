class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Perform an action based on the input command
  play(action: string): string {
    return `${this.name} is ${action}`;
  }
}

// Create an instance of the Player class for Mashrafee
const mashrafee = new Player('Mashrafee');

// Log the action of Mashrafee playing
console.log(mashrafee.play('bowling'));
