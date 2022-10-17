document.querySelector('button').addEventListener('click', Movies)

function Movies(){
    let jawn = document.querySelector('input').value
    console.log(jawn)
    const url = `https://superheroapi.com/api.php/10160305574666667/search/${jawn}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        // console.log(data)
        console.log(data)
        document.querySelector('h2').innerText = data.results[1].name
        document.querySelector('h3').innerText = data.results[1].powerstats.combat
        document.querySelector('img').src = data.results[1].image.url
//Fixed in partner with Ant & Simeon second fetch and too much concatonation
        let jawntoo = data.results[1].biography.publisher
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9dc3d960=${jawntoo}`)
        
         .then(res => res.json()) 
         .then(data => {
             console.log(word)
             console.log(data)
             document.querySelector('p').innerText = data.Title  })
       
            })
       
        }
        

