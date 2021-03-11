const homePage = function (contentTag) {
  const heading = document.createElement("h1");
  heading.classList.add("title");
  heading.innerText = "Pretentious Resturants";

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", "./public/hero.jpg");
  heroImage.setAttribute("alt", "Two bowls of soup");
  heroImage.classList.add("hero");

  const secondHeading = document.createElement("h2");
  secondHeading.innerText = "What some of our customers say:";

  const sayingOne = document.createElement("p");
  sayingOne.innerText = `One of the best restaurants we've been to savor the best Portuguese 
  memorable dishes - wow! Warm service Great strolling area`;

  const sayingTwo = document.createElement("p");
  sayingTwo.innerText = `The cataplana was delicious! We even ordered more rice to have the sauce 
  with. I made reservations and my table was ready when I arrived. The
  service was slow because there was only one waiter. It took a while for
  him to give us the menu and take our order. However the food came out
  fast. Overall I absolutely LOVED the cataplana and I'll definitely
  return if I go back to Lagos in the future.`;

  contentTag.appendChild(heroImage);
  contentTag.appendChild(secondHeading);
  contentTag.appendChild(sayingOne);
  contentTag.appendChild(sayingTwo);
};

export default homePage;
