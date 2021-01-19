player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

questionturn = "player1";
answerturn = "player2";

document.getElementById("player1display").innerHTML = player1_name + ": ";
document.getElementById("player2display").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "Question Turn : "+ player1_name;
document.getElementById("playeranswer").innerHTML = "Answer Turn : "+ player2_name;
function send() {
    get_word = document.getElementById("word").value;
    word= get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divi_2 =Math.floor(word.length/2);
    charAt2= word.charAt(length_divi_2);
    console.log(charAt2)

    lenght_m1 = word.length-1;
    charAt3 = word.charAt(lenght_m1);
    console.log(charAt3);

    remove_char1 = word.replace(charAt1, " _ ");
    remove_char2 = remove_char1.replace(charAt2, " _ ");
    remove_char3 = remove_char2.replace(charAt3, " _ ");
    console.log("Question turn = "+ remove_char3);

    question = "<h4 id= 'question'> Q. "+ remove_char3 + "</h4>";
    answerinput = "<br>Answer: <input type='text' id='answerinput' placeholder='Your Answer'></input>"
    checkbutton = "<br><br><button onclick = 'check()' id='checkbutton' class='btn btn-info'>Check</button>"
    row = question+ answerinput+ checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= "";
}
function check() {
    get_answer = document.getElementById("answerinput").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase = " + answer);
    if (answer == word) {
        if (answerturn == "player1") {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;  
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn = " + player2_name;
    } else {
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn = " + player1_name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn = " + player2_name;
    } else {
        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn = " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}