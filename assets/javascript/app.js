
		var c=60;
        var t;
        timedCount();
 
        function timedCount()
		{
 
        	var hours = parseInt( c / 3600 ) % 24;
        	var minutes = parseInt( c / 60 ) % 60;
        	var seconds = c % 60;
 
        	var result = (hours < 10 ? "0" + hours : hours)
        	 + ":" + (minutes < 10 ? "0" + minutes : minutes)
        	  + ":" + (seconds  < 10 ? "0" + seconds : seconds);
 
            
        	$('#clockcontainer').html(result);
            if(c == 0 )
			{
            
                alert("You ran out of time");
               
			
			}
            c = c - 1;
            t = setTimeout(function()
				{timedCount()},1000);
       		}

$('#results').on('click', function(){
    var correctCounter = 0;
    var incorrectCounter = 0;
    var questionOne = $("input[name='q1']:checked").val();

    if (questionOne == 'a') correctCounter++;
    else incorrectCounter++;

    var questionTwo = $("input[name='q2']:checked").val();

    if (questionTwo == 'd') correctCounter++;
    else incorrectCounter++;

    var questionThree = $("input[name='q3']:checked").val();

    if (questionThree == 'c') correctCounter++;
    else incorrectCounter++;

    var questionFour = $("input[name='q4']:checked").val();

    if (questionFour == 'b') correctCounter++;
    else incorrectCounter++;

    var questionFive = $("input[name='q5']:checked").val();

    if (questionFive == 'c') correctCounter++;
    else incorrectCounter++;
    $("#show").html("Correct: " + correctCounter);
    $("#show2").html("Incorrect: " + incorrectCounter);

});
