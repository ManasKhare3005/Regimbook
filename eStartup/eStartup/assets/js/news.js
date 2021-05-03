const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-news.p.rapidapi.com/v1/search?q=Indian%20Government&lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3d65eee32dmsh9e3eeb775fa84efp1d1392jsn97b2f11c1670",
		"x-rapidapi-host": "free-news.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
  console.log(response.articles);
  for(let i=7;i<10;i++) {
             $('#my-news').append(`<div class="col-md-6 col-lg-4">
             <div class="card">
               <img src="${response.articles[i].media}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${response.articles[i].title}</h5>
                 <p class="card-text">${response.articles[i].summary}</p>
                 <a href="${response.articles[i].link}"  style="background-color: orangered;" class="btn btn-primary btn-block">Read Full News</a>
             </div>
           </div>
         </div>  `)
          }
});

// git add .
// git commit -m ""
// git push origin main
