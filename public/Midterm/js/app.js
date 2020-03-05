$("#submit").on("click", function(){
   let ISBN = $("#isbn").val();
   console.log(ISBN);
   $.ajax({
        method: "GET",
        url: "https://openlibrary.org/api/books",
        dataType: "json",
        data: { "bibkeys" :`ISBN:${ISBN}` , "format": "json", "jscmd" : "data"},
        success: function(result,status){
            console.log(result);
            let data = result[`ISBN:${ISBN}`];
            $(".cover").html(`<img width=100% src ="${data.cover.large}"/>`)
            let info = $(".info");
            info.html("");
            info.append(`<p>${data.title}</p>`);
            info.append(`<p>${data.authors[0].name}</p>`);
            info.append(`<p>${data.publish_date}</p>`);
            info.append(`<p>${data.publishers[0].name}</p>`);
            info.append(`<p>${ISBN}</p>`);
            info.append(`<p>${data.number_of_pages}</p>`);
            
        },
        err:function(err){
            console.log(err);
        }
   });
   return false;
});