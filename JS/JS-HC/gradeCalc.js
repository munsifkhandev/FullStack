let stuMarks = 13;
let stuGrade;

if (stuMarks >= 90) {
  stuGrade = "Wahh jee wahh bache ne A Grade liya hai....";
} else if (stuMarks >= 80) {
  stuGrade = "Chalo koi nahii B aagya bad main or mehnat kr lena...";
} else if (stuMarks >= 70) {
  stuGrade = "Eww yeh bhi koi number hain C Grade hmmmm...";
} else {
  stuGrade = " Faill hai tu fail....";
}

console.log(stuGrade);

function calcGrade(marks) {
  if (marks >= 90) {
    return "Bhai A Grade hai";
  } else if (marks >= 80) {
    return "Bhaiii B Grade hai.";
  } else {
    return "Ustaad Fail hai tu";
  }
}
let result = calcGrade(672);
console.log(result);
