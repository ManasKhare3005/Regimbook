const settings = {
    async: true,
    crossDomain: true,
    url: "https://free-news.p.rapidapi.com/v1/search?q=Indian%20Government&lang=en",
    method: "GET",
    headers: {
      "x-rapidapi-key": "55e00f5629msha9991ea81532a93p18a9e0jsnc0f29c202338",
      "x-rapidapi-host": "free-news.p.rapidapi.com",
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.articles);
    for(let i=7;i<17 ;i++) {
               $('#news2').append(`<div class="col-md-7">
             
                 <img class="img-fluid rounded mb-3 mb-md-0 py-3" src="${response.articles[i].media}" alt="">
               
             </div>
             <div class="col-md-5">
               <h3>${response.articles[i].title}</h3>
               <p>${response.articles[i].summary}</p>
               <a class="btn btn-primary"  style="background-color: orangered;" href="${response.articles[i].link}">Read Full News
                 <span class="glyphicon glyphicon-chevron-right"></span>
               </a>
             </div>
               `)
            }
  });