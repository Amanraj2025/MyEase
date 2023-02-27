// envelope animation
window.onload = function(){
    var tl = new TimelineLite({delay: 1}),
      firstBg = document.querySelectorAll('.text__first-bg'),
      secBg = document.querySelectorAll('.text__second-bg'),
      word  = document.querySelectorAll('.text__word');
    
    tl
      .to(firstBg, 0.2, {scaleX:1})
      .to(secBg, 0.2, {scaleX:1})
      .to(word, 0.1, {opacity:1}, "-=0.1")  
      .to(firstBg, 0.2, {scaleX:0})
      .to(secBg, 0.2, {scaleX:0});
    
    document.querySelector('.restart').onclick = function() {tl.restart()};
  }


  // catagory

  $(document).ready(function(){
    function makeEffect(){
      $("#procatCont li").hover(function(){
        var num = $(this).index();
        $("#procatCont .bg").removeClass("opaque");
        $("#procatCont .bg").eq(num).addClass("opaque");
        $("#procatCont").css({"border-left": "1px solid rgba(255, 255, 255, .3)", "border-top": "1px solid rgba(255, 255, 255, .3)"});
        $(this).addClass("wh");
        $(this).siblings().addClass("tr");
        $("#procatCont span").addClass("spanfont");
        $("#procatCont span").eq(num).removeClass("spanfont").addClass("spanfont_this");
        },
        function(){
          $(this).removeClass("wh");
        });
          $("#procatCont li").mouseleave(function(){
          $("#procatCont .bg").last().addClass("opaque");
          $("#procatCont").css({"border-left": "1px solid #ccc", "border-top": "1px solid #ccc"});
          $("#procatCont li").removeClass("tr");
          $("#procatCont span").removeClass("spanfont");
          $("#procatCont span").removeClass("spanfont_this");
        });
     } //end makeEffect
    if ($(document).width() > 575) {
      makeEffect();
    }
  });

  // login
  $(document).ready(function(){
    function makeEffect(){
      $("#procatCont li").hover(function(){
        var num = $(this).index();
        $("#procatCont .bg").removeClass("opaque");
        $("#procatCont .bg").eq(num).addClass("opaque");
        $("#procatCont").css({"border-left": "1px solid rgba(255, 255, 255, .3)", "border-top": "1px solid rgba(255, 255, 255, .3)"});
        $(this).addClass("wh");
        $(this).siblings().addClass("tr");
        $("#procatCont span").addClass("spanfont");
        $("#procatCont span").eq(num).removeClass("spanfont").addClass("spanfont_this");
        },
        function(){
          $(this).removeClass("wh");
        });
          $("#procatCont li").mouseleave(function(){
          $("#procatCont .bg").last().addClass("opaque");
          $("#procatCont").css({"border-left": "1px solid #ccc", "border-top": "1px solid #ccc"});
          $("#procatCont li").removeClass("tr");
          $("#procatCont span").removeClass("spanfont");
          $("#procatCont span").removeClass("spanfont_this");
        });
     } //end makeEffect
    if ($(document).width() > 575) {
      makeEffect();
    }
  });


  // pricing 
  function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
      }
    }
    }
    check();
  
  // Have fun!
  // Instagram: cankaytaz
  
    // chatbot

    jQuery(document).ready(function($) {
      jQuery(document).on('click', '.iconInner', function(e) {
        jQuery(this).parents('.botIcon').addClass('showBotSubject');
        $("[name='msg']").focus();
      });
    
      jQuery(document).on('click', '.closeBtn, .chat_close_icon', function(e) {
        jQuery(this).parents('.botIcon').removeClass('showBotSubject');
        jQuery(this).parents('.botIcon').removeClass('showMessenger');
      });
    
      jQuery(document).on('submit', '#botSubject', function(e) {
        e.preventDefault();
    
        jQuery(this).parents('.botIcon').removeClass('showBotSubject');
        jQuery(this).parents('.botIcon').addClass('showMessenger');
      });
      
      /* Chatboat Code */
      $(document).on("submit", "#messenger", function(e) {
        e.preventDefault();
    
        var val = $("[name=msg]").val().toLowerCase();
        var mainval = $("[name=msg]").val();
        name = '';
        nowtime = new Date();
        nowhoue = nowtime.getHours();
    
        function userMsg(msg) {
          $('.Messages_list').append('<div class="msg user"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' + mainval + '</span></div>');
        };
        function appendMsg(msg) {
          $('.Messages_list').append('<div class="msg"><span class="avtr"><figure style="background-image: url(https://mrseankumar25.github.io/Sandeep-Kumar-Frontend-Developer-UI-Specialist/images/avatar.png)"></figure></span><span class="responsText">' + msg + '</span></div>');
          $("[name='msg']").val("");
        };
    
    
        userMsg(mainval);
        if( val.indexOf("hello") > -1 || val.indexOf("hi") > -1 || val.indexOf("good morning") > -1 || val.indexOf("good afternoon") > -1 || val.indexOf("good evening") > -1 || val.indexOf("good night") > -1 ) {
          if(nowhoue >= 12 && nowhoue <= 16) {
            appendMsg('good afternoon');
          } else if(nowhoue >= 10 && nowhoue <= 12) {
            appendMsg('hi');
          } else if(nowhoue >= 0 && nowhoue <= 10) {
            appendMsg('good morning');
          } else {
            appendMsg('good evening');
          }
    
          appendMsg("what's you name?");
    
        } else if( val.indexOf("i have problem with") > -1) {
          if (val.indexOf("girlfriend") > -1 || val.indexOf("gf") > -1) {
    
            appendMsg("take out your girlfriend, for dinner or movie.");
            appendMsg("is it helpful? (yes/no)");
    
          } else if (val.indexOf("boyfriend") > -1 || val.indexOf("bf") > -1) {
            appendMsg("bye something for him.");
            appendMsg("is it helpful? (yes/no)");
          } else {
            appendMsg("sorry, i'm not able to get you point, please ask something else.");
          }
        } else if( val.indexOf("yes") > -1) {
    
          var nowtime = new Date();
          var nowhoue = nowtime.getHours();
          appendMsg("it's my pleaser that i can help you");
    
          saybye();
        } else if( val.indexOf("no") > -1) {
    
          var nowtime = new Date();
          var nowhoue = nowtime.getHours();
          appendMsg("it's my bad that i can't able to help you. please try letter");
    
          saybye();
        } else if( val.indexOf("my name is ") > -1 || val.indexOf("i am ") > -1 || val.indexOf("i'm ") > -1 || val.split(" ").length < 2 ) {/*|| mainval != ""*/
          // var name = "";
          if(val.indexOf("my name is") > -1) {
            name = val.replace("my name is", "");
          }
    
          else if(val.indexOf("i am") > -1) {
            name = val.replace("i am", "");
          }
    
          else if(val.indexOf("i'm") > -1) {
            name = val.replace("i'm", "");
          }
    
          else {
            name = mainval;
          }
    
          // appendMsg("hi " + name + ", how can i help you?");
          appendMsg("hi " + name + ", how can i help you?");
        } else {
          appendMsg("sorry i'm not able to understand what do you want to say");
        }
    
        function saybye() {
          if (nowhoue <= 10) {
            appendMsg(" have nice day! :)");
          } else if (nowhoue >= 11 || nowhoue <= 20) {
            appendMsg(" bye!");
          } else {
            appendMsg(" good night!");
          }
        }
    
        var lastMsg = $('.Messages_list').find('.msg').last().offset().top;
        $('.Messages').animate({scrollTop: lastMsg}, 'slow');
      });
      /* Chatboat Code */
    })