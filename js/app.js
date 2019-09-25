$(document).ready(function(){
    let apiKey = "6QmRZUno9AZT5oE7pYw89j24QEXhGEhO";
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
    });
});

