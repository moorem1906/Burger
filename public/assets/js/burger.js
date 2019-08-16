$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        //This section creates the new burger
    var newBurger  = {
        burger_name: $("#newburger").val().trim(), devoured: 0
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(function () {
        console.log("New Burger");
        location.reload();
      });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();
//This sets the devoured to True

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1

            //PUT request .then reload the page
        };
        $.ajax("api/burger" + id, {
            type: "PUT",
            data:  devouredState,
    
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });
    $(".trashburger").on("click", function(evet){
        event.preventDefault();

        var id = $(this).data("id");
        //Sends the DELETE request 

        $.ajax({
            type:"DELETE",
            url: "api/burger" + id 

        }).then(location.reload());
    });


   
});