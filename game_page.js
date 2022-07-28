p1name = localStorage.getItem("p1name");
p2name = localStorage.getItem("p2name");

p1_score = 0;
p2_score = 0;

document.getElementById("player1_name").innerHTML = p1name + " : ";
document.getElementById("player2_name").innerHTML = p2name + " : ";

document.getElementById("player1_score").innerHTML = p1_score ;
document.getElementById("player2_score").innerHTML = p2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + p1name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2name ;

question_turn = "player1";
answer_turn = "player2";


function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			p1_score = p1_score +1;
		    document.getElementById("player1_score").innerHTML = p1_score;
		}
		else 
		{
			p2_score = p2_score +1;
		    document.getElementById("player2_score").innerHTML = p2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + p2name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + p1name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1name ;
	}

    document.getElementById("output").innerHTML = "";
}

