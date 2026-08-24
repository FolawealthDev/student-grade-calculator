//Student Information

let students = [
{
name:"Grace",
testScore: 18,
assignmentScore: 17,
examScore: 60
},

{
name:"Glory",
testScore: 10,
assignmentScore: 15,
examScore: 43
},

{
name:"Goodness",
testScore: 13,
assignmentScore: 20,
examScore: 25
},

{
name:"Goodluck",
testScore: 8,
assignmentScore:10,
examScore: 2
},

{
name:"Gift",
testScore: 5,
assignmentScore: 10,
examScore: 25
}

];

function calculateResult(name, testScore, assignmentScore, examScore) {

    //Final Score

let finalScore = testScore + assignmentScore + examScore;


// Calculate Grade


    let grade;

    if (finalScore >= 70) {
        grade ="A";}

         else if (finalScore >= 60) {
        grade ="B";}

        else if (finalScore >= 50) {
        grade ="C";}

        else if (finalScore >= 45) {
        grade ="D";}

        else if (finalScore >= 40) {
        grade ="E";}

        else {
        grade ="F";}

        //Determine Pass or Fail
        let status;

        if (finalScore >= 40) {
            status = "Passed";}

            else{
                status = "Failed";}



                //Feedback
                
               let feedback;

                if (finalScore >= 80) {
                    feedback = "Execellent Work."; }

                    else if (finalScore >= 60) {
                        feedback = "Good Work."; }

                    else if (finalScore >= 50) {
                        feedback = "fair, but you can do better."; }

                    else {
                        feedback = "poor, you need to work harder.";}



let row = document.createElement("tr");

row.innerHTML =
`<td>${name}</td>
<td>${finalScore}</td>
<td>${grade}</td>
<td>${status}</td>
<td>${feedback}</td>`;

studentTable.appendChild(row);

return finalScore; }

let studentTable = document.getElementById("studentTable");




let totalScore = 0;
let highestScore = 0;
let lowestScore = 100;
let passedStudents = 0;
let scores=[];



students.forEach(function(student){
    let score = calculateResult(
        student.name,
        student.testScore,
        student.assignmentScore,
        student.examScore);

        totalScore = totalScore + score;

        if (score > highestScore){highestScore = score;}

        if (score < lowestScore) {lowestScore = score;}
        scores.push(score);

        if (score >= 40){
    passedStudents++;}

});
let classAverage = totalScore/students.length;

//Display class statisticss

console.log("Class Average:" + classAverage.toFixed(2));
console.log("Highest Score:" + highestScore);
console.log("Lowest Score:" + lowestScore);
console.log("Students passed" + passedStudents);
