//  Acting like backEnd db

function Post(author, postDetails, photo, likes, comments, toString) {
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

const post1 = new Post(
  "aaa aaa",
  "Creation Using Object Literal",
  "Object Literals",
  5,
  ["good enough.", "deserves more attention."]
);

const post2 = new Post(
  "fff aaa",
  "Creation Using new Object() Constructor",
  "Constructor",
  1,
  ["good enough.", "deserves more attention."]
);

const post3 = new Post(
  "jjkjh aaa",
  "Accessing Object Properties",
  "Object Properties",
  12,
  ["good enough.", "deserves more attention."]
);

const post4 = new Post(
  "dfssfd dsfdfssf",
  "Modifying Object Properties",
  "Properties",
  46,
  ["good enough.", "deserves more attention."]
);

const post5 = new Post(
  "yyy kljjj",
  "Basic Operations on JavaScript Objects",
  "JavaScript Objects",
  17,
  ["good enough.", "deserves more attention."]
);

let postsCollection = [post1, post2, post3, post4, post5];

export default postsCollection;
