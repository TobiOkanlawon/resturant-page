const menu = function (container) {
  const paragraph1 = document.createElement("p");
  paragraph1.innerText = `
  Ea amet tempor aute incididunt pariatur commodo aliqua anim ad 
  proident enim ad dolore tempor. Officia dolor velit proident aute.
  Aute ut deserunt cillum id duis quis occaecat irure aute non in velit officia.
  Excepteur eu aliqua Lorem ipsum commodo irure magna aliqua tempor consectetur qui.
  Cillum amet anim nulla laborum id. 
  Non pariatur deserunt voluptate nostrud eiusmod dolore consectetur labore in.
  Proident est nulla veniam dolor Lorem sit magna ad mollit esse.`;

  const paragraph2 = document.createElement("p");
  paragraph2.innerText = `
  Ea amet tempor aute incididunt pariatur commodo aliqua anim ad 
  proident enim ad dolore tempor. Officia dolor velit proident aute.
  Aute ut deserunt cillum id duis quis occaecat irure aute non in velit officia.
  Excepteur eu aliqua Lorem ipsum commodo irure magna aliqua tempor consectetur qui.
  Cillum amet anim nulla laborum id. 
  Non pariatur deserunt voluptate nostrud eiusmod dolore consectetur labore in.
  Proident est nulla veniam dolor Lorem sit magna ad mollit esse.`;

  container.appendChild(paragraph1);
  container.appendChild(paragraph2);
};

export default menu;
