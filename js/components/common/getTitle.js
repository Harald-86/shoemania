export function getTitle(result) {
  for (let i = 0; i < result.data.length; i++) {}
  const title = document.querySelector("title");
  title.innerHTML = `${result.data.attributes.title} | Shoemania`;
  console.log(result.data.attributes.title);
}
