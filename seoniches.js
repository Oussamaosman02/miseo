const hayNichos = (niche) => {
  const elementos = [];
  const citeElements = document.querySelectorAll("cite");
  citeElements.forEach((ele) => {
    elementos.push({
      textIncludes: ele.childNodes[0].textContent.includes(niche),
      node: ele,
    });
  });
  console.log({
    nichos: elementos.some((elem) => elem.textIncludes),
    num: elementos.filter((v) => v.textIncludes).length,
    elements: elementos.filter((v) => v.textIncludes),
  });
};
