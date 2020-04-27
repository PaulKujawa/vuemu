const bookClubs = [
  {
    name: "dancing dolphins",
    members: [
      {
        name: "john doe",
        books: [
          { id: "f4ib", title: "book title 1" },
          { id: "pokio", title: "book title 2" }
        ]
      }
    ]
  },
  {
    name: "trash pandas",
    members: [
      {
        name: "jane doe",
        books: [
          { id: "trer", title: "book title 3" },
          { id: "ijoi", title: "book title 4" }
        ]
      }
    ]
  }
];

function* iterateBooks(books) {
  for (let book of books) yield book;
}

function* iterateMembers(members) {
  for (let member of members) yield* iterateBooks(member.books);
}

function* iterateClubs(clubs) {
  for (let club of clubs) yield* iterateMembers(club.members);
}

function findBookGenerator(bookId) {
  for (let book of iterateClubs(bookClubs)) {
    if (book.id === bookId) {
      return book;
    }
  }
}

function findBookFlatMap(id) {
  return bookClubs
    .flatMap(club => club.members)
    .flatMap(member => member.books)
    .find(book => book.id === id);
}

function findBookForLoop(id) {
  for (let club of bookClubs) {
    for (let member of club.members) {
      for (let book of member.books) {
        if (book.id === id) {
          return book;
        }
      }
    }
  }
}

console.log(findBookFlatMap("pokio"));
