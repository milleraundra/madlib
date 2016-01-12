$(document).ready(function() {
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>hello!</li>");
    $("ul#webpage").prepend("<li> why, hello there</li>");

    $("ul#user").children("li").first().click(function)(){
      alert("hi");
    };
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function(){
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});
