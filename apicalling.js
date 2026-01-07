//calling api
//json:javascript object notation:full form
//to tranfer data from clinet to server we use json and xml but json is easy syntax so  prefer json
//xml:tags ne use cheysukoni logic ne implement cheyali(complex)
//api calling with async await
const postInfo = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
postInfo();
