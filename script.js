let movies = [

    {
        name:"Avengers Endgame",
        poster:"https://tse4.mm.bing.net/th?id=OIP.nfEMVTdKvwQUi1EXVXi3pAHaK-&pid=Api&P=0&h=180",
        rating:8.7
    },
    {
        name:"Spider Man",
        poster:"https://tse2.mm.bing.net/th?id=OIP.BTHTYDVIHQ91CARAiOP4_wHaLH&pid=Api&P=0&h=180",
        rating:8.7
    },
    {
        name:"Toy Story ",
        poster:"https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/s4203c9b02a6fa8f1/image/i0342f4e5c9eb3ef9/version/1520016007/toy-story.jpg",
        rating:8.7
    },
    {
        name:"Pairete of Cerabin",
        poster:"https://cdn.traileraddict.com/content/walt-disney-pictures/pirates_caribbean4-6.jpg",
        rating:8.7
    },
    {
        name:"Sleepy Hollow ",
        poster:"https://tse3.mm.bing.net/th?id=OIP.gph3IQ3IXvnQpQYvq60yAQHaLH&pid=Api&P=0&h=180",
        rating:8.7
    },
    {
      name:" Mickey Mouse",
      poster:"https://br.web.img3.acsta.net/pictures/14/05/27/11/35/040263.jpg",
      rating:8.7
  },
  {
    name:"Timon & Pumbaa",
    poster:"https://tse3.mm.bing.net/th?id=OIP._8-0shYrroukcNPUJqEFQgHaLH&pid=Api&P=0&h=180",
    rating:8.7
},
{
  name:"BatMan",
  poster:"https://tse4.mm.bing.net/th?id=OIP.VGj0rWESFusFdddqlRrckQHaJl&pid=Api&P=0&h=180",
  rating:8.7
},
{
  name:"Super Man",
  poster:"https://tse1.mm.bing.net/th?id=OIP.6i-PpdPvHBm4hMObltrNZwHaNK&pid=Api&P=0&h=180",
  rating:8.7
},
{
  name:"The Mask",
  poster:"https://tse4.mm.bing.net/th?id=OIP.JHzi0cQG8P8azJtHow2xfAHaLH&pid=Api&P=0&h=180",
  rating:8.7
},
{
  name:"The Iron Claw",
  poster:"https://tse1.mm.bing.net/th?id=OIP.nkcC_H8Xz0nKQkR27VAp5gHaLL&pid=Api&P=0&h=180",
  rating:8.7
},
{
  name:"Wonka",
  poster:"https://tse3.mm.bing.net/th?id=OIP.08da3kCYevUe-9iqQKQkxAHaLF&pid=Api&P=0&h=180",
  rating:8.7
},
];

function searchMovie()
{
  let movieName =  document.getElementById('search').Value;

   if(movieName!=="")
   {
   let result = movies.filter(function(movie)
    {
        return movie.name.toUpperCase().includes(movieName.toUpperCase()) 
      })
       
      

       displayMovies(result);
       
    }

    else
    {
      displayMovies(movies);
    }
  console.log(movieName);
}

function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";
  let htmlString =``;

for(let i=0; i<data.length;i++)
{
    
     htmlString = htmlString+
     `<div class="movie">
     <div class="overlay">
         <div class="video">
   
         </div>
           <div class="details">
              
            <h1>${data[i].name}</h1>
            <h2>IMDB : ${data[i].rating}</h2>
            
   
           </div>
     </div>
    <img class="poster" src="${data[i].poster}" alt="poster">
   </div>`
}
  console.log(htmlString);  
document.getElementById("movies").innerHTML = htmlString; 
}

displayMovies(movies);






/*
let movieDIV = document.createElement("div");
    movieDIV.classList.add('movie');

    let overlayDIV = document.createElement("div");
    overlayDIV.classList.add("overlay");

    movieDIV.appendChild(overlayDIV);

    console.log(movieDIV);
    */