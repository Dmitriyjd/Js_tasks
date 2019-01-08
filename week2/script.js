function submit() {
    var answers = [];
    if(document.getElementById("question1_1").checked)
    {
        answers.push(document.querySelector("#question1_1 + span").innerHTML)
    };
    if(document.getElementById("question1_2").checked)
    {
        answers.push(document.querySelector("#question1_2+span").innerHTML)
    };
    if(document.getElementById("question1_3").checked)
    {
        answers.push(document.querySelector("#question1_3+span").innerHTML)
    };
    if(document.getElementById("question2_1").checked)
    {
        answers.push(document.querySelector("#question2_1+span").innerHTML)
    };
    if(document.getElementById("question2_2").checked)
    {
        answers.push(document.querySelector("#question2_2+span").innerHTML)
    };
    if(document.getElementById("question2_3").checked)
    {
        answers.push(document.querySelector("#question2_3+span").innerHTML)
    };
    answers.push(document.getElementById("question3").innerHTML);
    //var answer1_ = document.getElementById("question2_1");
    //var answer1_! = document.getElementById("question2_1");

    console.log(answers);
}
//if(checked) array.push;