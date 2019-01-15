var API_KEY = "cVVxx9bfexjs2hBD8FeLHdHJ3uvNzAnh"
var topics = ['cats', 'dogs', 'birds'];


$('#submit').on('click', function(){
    var inputValue = $('#name').val();
   
    $.get(`http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${API_KEY}&limit=5`, function(result){
        
        for( var i = 0; i < result.data.length; i++) {
           
            $('#content').append(`<img src=${result.data[i].images.original.url} />`)
        }
    });
})

populateTopics(topics);


function populateTopics(topics){
    for(var i = 0; i < topics.length; i ++ ){
        $('#topics').append(`<button data-value=${topics[i]} class="topics">${topics[i]}</button>`)
    }
}


$(document).on('click', '.topics', function(){
    var inputValue = $(this).attr('data-value')
    $('#content').empty();
    $.get(`http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=${API_KEY}&limit=5`, function(result){
        
        for( var i = 0; i < result.data.length; i++) {
           
            $('#content').append(`<img src=${result.data[i].images.original.url} />`)
        }
    });
})