//  Acting like backEnd db

function User(author, postDetails, photo, likes, comments, toString) {
  this.author = author;
  this.postDetails = postDetails;
  this.photo = photo;
  this.likes = likes;
  this.comments = comments;
  this.toString =
    "Name: " +
    this.author +
    "\n" +
    "Post Details: " +
    this.postDetails +
    "\n" +
    "Photo Description: " +
    this.photo +
    "\n" +
    "Likes: " +
    this.likes +
    "\n" +
    "Comments: " +
    this.comments;
}

const post1 = new User(
  "aaa aaa",
  "Creation Using Object Literal",
  "Object Literals",
  5,
  ["good enough.", "deserves more attention."]
);

const post2 = new User(
  "fff aaa",
  "Creation Using new Object() Constructor",
  "Constructor",
  1,
  ["good enough.", "deserves more attention."]
);

const post3 = new User(
  "jjkjh aaa",
  "Accessing Object Properties",
  "Object Properties",
  12,
  ["good enough.", "deserves more attention."]
);

const post4 = new User(
  "dfssfd dsfdfssf",
  "Modifying Object Properties",
  "Properties",
  46,
  ["good enough.", "deserves more attention."]
);

const post5 = new User(
  "yyy kljjj",
  "Basic Operations on JavaScript Objects",
  "JavaScript Objects",
  17,
  ["good enough.", "deserves more attention."]
);

let usersCollection = [post1, post2, post3, post4, post5];

export default usersCollection;
