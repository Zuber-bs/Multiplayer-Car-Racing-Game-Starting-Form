class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementStyle() {
    this.input.class("customInput");
    this.greeting.class("greeting");
    this.playButton.class("customButton");
  }

  playPressed() {
    this.playButton.mousePressed(() => {
      var name = this.input.value();
      var message = `Hello ${name} <br/> Wait for another player to join...`;
      this.greeting.html(message);
      this.playButton.hide();
      this.input.hide();
    });
  }


  setElementPosition() {
    this.titleImg.position(width/40, 100);
    this.playButton.position(width/2.25, 500);
    this.input.position(width/2.35, 400);
    this.greeting.position(width/3, height/2);
  }

  display() {
    this.setElementPosition();
    this.setElementStyle();
    this.playPressed();
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
