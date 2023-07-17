class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPortIndex = 0;
    this.previousPort = null;
    this.currentPort = this.itinerary.ports[this.currentPortIndex];
  }

  setSail() {
    const lastPortIndex = this.itinerary.ports.length - 1;
    if (this.currentPortIndex === lastPortIndex) {
      throw new Error('Cannot set sail from the last port of the itinerary');
    }
    this.currentPortIndex++;
    this.currentPort = this.itinerary.ports[this.currentPortIndex];
  }
  
  

  dock() {
    if (this.currentPort === this.itinerary.ports[0]) {
      throw new Error('Already docked at the starting port');
    }
  
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    this.currentPort = this.itinerary.ports[currentPortIndex - 1];
  }
}

module.exports = Ship;
