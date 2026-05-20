import {books} from "./library.js"

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.bookDiv');
  if (!containers.length) {
    console.warn('skew-on-scroll: no .bookDiv elements found');
    return;
  }

  containers.forEach(container => {
    const children = container.querySelectorAll('.book');
    if (!children.length) return;

    let last = container.scrollLeft;
    let velocity = 0;

    function loop() {
      const current = container.scrollLeft;
      const delta = current - last;
      last = current;
      // velocity smoothing
      velocity = velocity * .8 + delta * 0.4;
      // convert to degrees and clamp
      const skew = Math.max(-12, Math.min(12, velocity));
      children.forEach(el => el.style.transform = `skew(${skew}deg)`);
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  });
});

books.forEach(book => {
  let status;
  if (book.finished == true){
    status = "fin"
  }
  else{
    status = "curr"
  }
  let genre = book.genre;
  const back = $("<div class='book "+genre+"'></div>").appendTo(".bookDiv."+status);
  const pages = $("<div id='pages'></div>").appendTo(back);
  const cover = $("<div id='cover'></div>").appendTo(back);
  const title = $("<h1>"+book.title+"</h1>").appendTo(cover);
  const author = $("<h2>"+book.author+"</h2>").appendTo(cover);
  const icon = $("<img class='bookIcon' src='../../assets/book-icons/"+book.iconName+".svg' alt='book icon' />").appendTo(cover);
})