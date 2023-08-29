const hayNichos = (niche) => {
  const elementos = [];
  const citeElements = document.querySelectorAll("cite");
  citeElements.forEach((ele) =>
    elementos.push(ele.childNodes[0].textContent.includes(niche))
  );
  console.log({
    nichos: elementos.some((elem) => elem),
    num: elementos.filter((v) => v).length,
  });
};
