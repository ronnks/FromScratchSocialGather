//  Acting like backEnd db

function Post(author, postDetails, photo, likes, comments) {
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

let postsCollection = [];

export default postsCollection;
