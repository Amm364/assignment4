//Alex Mitro Assignment 4

// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  function useAjax(input){    //function that uses ajax to get the json object
    $.ajax({
      type: 'GET',
      url: "http://www.mattbowytz.com/simple_api.json?data=all",
      dataType:"json",
    })
      .done(function(data){
      input=input.toLowerCase()     //lowercase to make comparison easier
      var count=1
      data.data.interests.forEach(function(choice){   //get all the interests
        choice=choice.toLowerCase()
        if (choice.startsWith(input)){
          $(".results").append("<a href=https://www.google.com/?gws_rd=ssl#q=" + choice + ">" + choice + "</a><br>")
        }
      })
      data.data.programming.forEach(function(choice){   //get all the programming stuff
        choice=choice.toLowerCase()
        if (choice.startsWith(input)){
          $(".results").append("<a href=https://www.google.com/?gws_rd=ssl#q=" + choice + ">" + choice + "</a><br>")
        }
      })
    })
  }
  $('.flexsearch-input').keyup(function(e) {    //activates on keyup on the search bar. Sends the current search to the ajax function
    var input = $('.flexsearch-input').val();
    $('.results').html("")
    useAjax(input);
  });
})();