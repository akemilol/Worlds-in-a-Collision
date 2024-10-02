
const apiKey = 'DoO5o1GYjlFVKQVxglsMrM3iCmhMP3q2YSDeX4VD';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
 .then(response => {
   if (!response.ok) {
     throw new Error('Erro na requisição: ' + response.statusText);
   }
   return response.json();
 })
 .then(data => {

   console.log(data);
 })
 .catch(error => {
   console.error('Erro:', error);
 });