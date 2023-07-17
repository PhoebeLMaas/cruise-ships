class Ship {
    constructor(startingPort) {
      this.startingPort = startingPort;
    }
  
    setSail() {
      this.startingPort = null;
    }
  
    dock(port) {
      this.startingPort = port;
    }
  }
  
  module.exports = Ship;
  