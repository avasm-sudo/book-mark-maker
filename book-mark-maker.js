let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];


let myFormEl = document.getElementById("bookmarkForm");
let nameEl = document.getElementById("siteNameInput");
let nameErrMsgEl = document.getElementById("siteNameErrMsg");
let urlErrMsgEl = document.getElementById("siteUrlErrMsg");
let urlEl = document.getElementById("siteUrlInput");
let addListEl = document.getElementById("bookmarksList")


nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});
urlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsgEl.textContent = "Required*";
    } else {
        urlErrMsgEl.textContent = "";
    }
});

bookmarkCount = bookmarks.length;

function createAndAppendList(bookList) {
    console.log("bookList : ", bookList)
    let listId = "list" + bookmarkCount;
    let labelId = "label" + bookmarkCount;
    let buttonId = "button" + bookmarkCount;
    let listElement = document.createElement("li");
    listElement.classList.add("d-flex", "flex-row", "container-inner-card");
    listElement.id = listId;
    addListEl.appendChild(listElement);

    let labelContainer = document.createElement("div");
    listElement.appendChild(labelContainer);

    let labelElement = document.createElement("h1");
    labelElement.id = labelId;
    labelElement.classList.add("container-card-heading");
    labelElement.textContent = bookList.name;
    labelContainer.appendChild(labelElement);

    let buttonContainer = document.createElement("div");
    listElement.appendChild(buttonContainer);
    let buttonElement = document.createElement("button");
    buttonElement.id = buttonId
    buttonElement.classList.add("container-inner-card-button");
    let anchorElement = document.createElement("a");
    anchorElement.href = bookList.url;
    anchorElement.textContent = "Visit";
    buttonElement.appendChild(anchorElement);
    buttonElement.onclick = function() {

        anchorElement.target = "_blank";
    }
    buttonContainer.appendChild(buttonElement);
    console.log(addListEl)
}

function onAddTodo() {
    let siteNameValue = nameEl.value;
    let siteUrlValue = urlEl.value;
    if (siteNameValue === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (siteUrlValue === "") {
        urlErrMsgEl.textContent = "Required*";
    }
    bookmarkCount = bookmarkCount + 1;

    let newBookmark = {
        bookmarkId: "bookmark" + bookmarkCount,
        name: siteNameValue,
        url: siteUrlValue,
    };
    bookmarks.push(newBookmark);
    console.log(bookmarks);
    createAndAppendList(newBookmark);
    nameEl.value = "";
    urlEl.value = ""
}
for (let eachbook of bookmarks) {
    createAndAppendList(eachbook);
}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    onAddTodo();
});