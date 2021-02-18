const inputValue = document.getElementById("anime-search").value;
const searchBtn = document.querySelector(".button-search");

function askApi(keyword){
    const animesDOM = document.querySelector(".anime-center")
    const apiUrl = `https://api.jikan.moe/v3/search/anime?q=${keyword}`
        fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {results = []} = response
            const animes = results.map(anime => {
            const {title,image_url} = anime
            return {title,image_url}
            })
            let result = ""
            animes.forEach(anime => {
                result += ` 
                <div class="card">
                <div class="card-header">
                    <div class="container">
                        <img class="image-anime" src=${anime.image_url} alt="">
                        <div class="screen"></div>
                    </div>
                    <button class="details">Details</button>
                </div>
                <div class="card-footer">
                    <h4>${anime.title}</h4>
                </div>
            </div>`
        });
        animesDOM.innerHTML = result;
                
        })
        
            
}



document.addEventListener("click", (e) => {
    console.log(e.target.className)
    if (e.target.className === "button-search"){
        askApi(inputValue)
    }
    
})




