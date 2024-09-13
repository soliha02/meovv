async function getComments() {
    await fetch('https://jsonplaceholder.typicode.com/comments')
   .then (res=> res.json())
   .then(json => console.log(json));
}

getComments()

