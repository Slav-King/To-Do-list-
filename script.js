
//   $("li").click(function(){
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//         color: "black" ,
//         textDecoration: "none"
//     });     
//     }
//     else{
//         $(this).css({
//         color: "gray",
//         textDecoration: "line-through" 
//         });
//     }
//      });

// THE ABOVE CODE IS SAME AS THE BELOW---------SMALLER ONE:) 

$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
   
   });  
   $("ul").on("click","span",function(event){
     $(this).parent().fadeOut(500,function(){
         $(this).remove();
     });
     event.stopPropagation();  
   
   });
   
   $("input[type='text']").keypress(function(event){
       if(event.which == 13){
        var todoText = ($(this).val());
        $(this).val("");
        $("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span> "+ todoText + "</li>")
       }
   });
   $(".fa-plus").click(function(){
      $("input[type='text']").fadeToggle();
   });
//  append TAKES HTML... 
//   we put ul in the upper two selection and put the li and span in the "on" function i.e. the code within "on" would only run when we type the li and span.