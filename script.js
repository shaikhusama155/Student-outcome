document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showResult();
  });
  
  function showResult() {
    let name = document.getElementById('name').value;
    let rollNumber = document.getElementById('rollNumber').value;
    let subject1 = parseInt(document.getElementById('subject1').value);
    let subject2 = parseInt(document.getElementById('subject2').value);
    let subject3 = parseInt(document.getElementById('subject3').value);
    let subject4 = parseInt(document.getElementById('subject4').value);
    let subject5 = parseInt(document.getElementById('subject5').value);
    let subject6 = parseInt(document.getElementById('subject6').value);
    
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    let percentage = (totalMarks / 600) * 100;
    let grade = '';
  
    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    document.getElementById('studentName').textContent = 'Name: ' + name;
    document.getElementById('studentRollNumber').textContent = 'Roll Number: ' + rollNumber;
    document.getElementById('totalMarks').textContent = 'Total Marks: ' + totalMarks + "/600";
    document.getElementById('gradePercentage').textContent = 'Percentage: ' + percentage.toFixed(2) + '%';
    document.getElementById('grade').textContent = 'Grade: ' + grade;

    document.getElementById('resultContainer').classList.remove('hidden');
  }
  