const contact = function (contentTag) {
  const paragraph = document.createElement("p");

  const link = '<a href="mailto:tobi.okanlawon@icloud.com">here</a>';
  paragraph.innerHTML = `Feel free to contact me at ${link}. Especially if you are a recruiter :)`;

  contentTag.appendChild(paragraph);
};

export default contact;
