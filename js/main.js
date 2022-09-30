const contentElem = document.querySelector(".content");

const books = [
    {
        title: "Psychology 101",
        author: "Georg Anthon",
    },
    {
        title: "1984",
        author: "Georg Owell",
    },
];
contentElem.innerHTML = `
<h1>Book Site</h1>
<h2>there are ${books.length} books</h2>

<div className="books">
${books
    .map((book) => {
        return `<div>${book.title}</div>
        <div class="description">${book.author}</div>`;
    })
    .join("")}
</div>
`;
