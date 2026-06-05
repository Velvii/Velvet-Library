import {books} from "./library.js"
import {createBook} from "./library.js"
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
      const skew = Math.max(-15, Math.min(15, velocity));
      children.forEach(el => el.style.transform = `skew(${skew}deg)`);
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  });
});
function refreshBooks(){
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
  back.on("click", function(){
    if (book.finished){
      document.getElementById("completeStamp").style.visibility = "visible"
      document.getElementById("completeStamp").style.animation = "none"
      document.getElementById("completeStamp").offsetHeight
      document.getElementById("completeStamp").style.animation = "completeStamp cubic-bezier(0.075, 0.82, 0.165, 1) .4s"
    }
    document.getElementsByClassName("bookSelect")[0].style.opacity = "1"
    document.getElementsByClassName("bookSelect")[0].style.pointerEvents = "all"
    document.getElementById("bookTitle").textContent = book.title
    document.getElementById("backgroundTitle").textContent = book.title;
    document.getElementById("pageCount").textContent = book.curPages+"/"+book.totalPages+" PAGES"
    document.getElementById("startRead").textContent = book.startDate;
    document.getElementById("lastRead").textContent = book.lastDate;
    document.getElementById("publishDate").textContent = book.publishingDate;
    document.getElementById("backgroundDate").textContent = book.publishingDate;
    document.getElementById("logPagesSubmitBut").onclick = function(){
      document.getElementById("logPagesDiv").style.opacity = "0";
      document.getElementById("logPagesDiv").style.pointerEvents = "none";
      book.curPages = document.getElementById("logPagesInput").value;
      if (book.curPages > book.totalPages){
        book.curPages = book.totalPages
      }
      if (book.curPages == book.totalPages){
        document.getElementById("completeStamp").style.visibility = "visible"
        document.getElementById("completeStamp").style.animation = "none"
        document.getElementById("completeStamp").offsetHeight
        document.getElementById("completeStamp").style.animation = "completeStamp cubic-bezier(0.075, 0.82, 0.165, 1) .4s"
      }
      document.getElementById("pageCount").textContent = book.curPages+"/"+book.totalPages+" PAGES"
      document.getElementById("logPagesInput").value = "";
    }
  })
  })

  document.getElementById("closeButton").onclick = function(){
  document.getElementsByClassName("bookSelect")[0].style.opacity = "0"
  document.getElementsByClassName("bookSelect")[0].style.pointerEvents = "none"
  document.getElementById("completeStamp").style.visibility = "hidden"
  }

  document.getElementById("logPagesButton").onclick = function(){
  document.getElementById("logPagesDiv").style.opacity = "1"
  document.getElementById("logPagesDiv").style.pointerEvents = "all"
  }
}

refreshBooks()

document.getElementById("createNewBookConfirm").onclick = function(){
  let newBookTitle = document.getElementById('newBookTitle').value
  let newBookAuthor = document.getElementById('newBookAuthor').value
  let newBookGenre = document.getElementById('newBookGenre').value
  let newBookIcon = document.getElementById('newBookIcon').value
  let newBookPublishDate = document.getElementById('newBookDate').value
  let newBookPages = document.getElementById('newBookPages').value

  createBook(newBookTitle,newBookAuthor,newBookGenre,newBookIcon,newBookPublishDate,false,newBookPages)
  refreshBooks()
  document.getElementById("newBookDiv").style.opacity = "0"
  document.getElementById("newBookDiv").style.pointerEvents = "none"
}

document.getElementById("newBookButton").onclick = function(){
  document.getElementById("newBookDiv").style.opacity = "1"
  document.getElementById("newBookDiv").style.pointerEvents = "all"
}