//Student Information
let studentName = "Grace";
let testScore = 18;
let assignmentScore = 17;
let examScore = 62;

//Final Score
let finalScore = testScore + assignmentScore + examScore;

//Variable for the result
let grade;
let status;
let feedback;

// Calculate Grade
function calculateGrade(){

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
        if (finalScore >= 40) {
            status = "passed";}

            else{
                status = "Failed";}

                //Feedback
                if (finalScore >= 80) {
                    feedback = "Execellent Work."; }

                    else if (finalScore >= 60) {
                        feedback = "Good Work."; }

                    else if (finalScore >= 50) {
                        feedback = "fair, but you can do better."; }

                    else {
                        feedback = "poor, you need to work harder.";}

}

//Run the function
calculateGrade();

console.log("Student:" + studentName);
console.log("Score:" + finalScore);
console.log("Grade:" + grade);
console.log("Status" + status);
console.log("Feedback:" + feedback);