    async function loadPost(){
const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
);

console.log(response.status);
console.log(response.ok);

const post = await response.json();
console.log(post.title);
}
loadPost();
