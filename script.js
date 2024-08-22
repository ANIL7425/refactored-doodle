
const submit_btn=document.getElementById("submit");
document.addEventListener("DOMContentLoaded", function() {

    loadStoredData();
    submit_btn.onclick = function() {

        
        const studentName = document.getElementById("students_name").value;
        const studentID = document.getElementById("student_id").value;
        const studentClass = document.getElementById("class").value;
        const rollNo = document.getElementById("roll").value;
        if(studentName === "" || studentID === "" || studentClass === "" || rollNo === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
    
    const studentData = {
        studentName,
        studentID,
        studentClass,
        rollNo
    };
    saveToLocalStorage(studentData);

    
    addStudentToScreen(studentData);
    document.getElementById("students_name").value = "";
    document.getElementById("student_id").value = "";
    document.getElementById("class").value = "";
    document.getElementById("roll").value = "";
}
document.getElementById("reset").addEventListener("click", function() {
   
    localStorage.removeItem("students");

  
    document.querySelector(".details").innerHTML = "";

   
    document.getElementById("student_name").value = "";
    document.getElementById("student_id").value = "";
    document.getElementById("class").value = "";
    document.getElementById("roll").value = "";
});






function saveToLocalStorage(studentData) {
  
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(studentData);
    console.log(students);
    localStorage.setItem("students", JSON.stringify(students));
}


    function loadStoredData() {
       
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.forEach(student => {
            addStudentToScreen(student);
        });
    }
    
    function addStudentToScreen(student) {
        const studentDetails = document.createElement("div");
        studentDetails.classList.add("block-2");

        
        studentDetails.innerHTML = `
            <p><strong>Student Name:</strong> ${student.studentName}</p>
            <p><strong>Student ID:</strong> ${student.studentID}</p>
            <p><strong>Class:</strong> ${student.studentClass}</p>
            <p><strong>Roll No:</strong> ${student.rollNo}</p>
           
            `;
       
       
        document.querySelector(".details").appendChild(studentDetails);
    }
});
   
   





