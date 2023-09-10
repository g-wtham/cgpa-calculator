const courseDetails = {
	semester2: [
		{course_code: "22ENT21", course_title: "Professional English"},
		{course_code: "22MAT22", course_title: "Probability and Statistics"},
		{course_code: "22PHT22", course_title: "Physics for Information Sciences"},
		{course_code: "22EET11", course_title: "Basics of Electrical and Electronics Engineering"},
		{course_code: "22ITT21", course_title: "C Programming"},
		{course_code: "22HST11", course_title: "தமிழர்மரபு /Heritage of Tamils (For Students admitted in AY:2022-2023 only)"},
		],	

	practical: [
		{course_code: "22PHL21", course_title: "Physics and Chemistry Laboratory – II"},
		{course_code: "22ITL21", course_title: "C Programming Laboratory"},
		{course_code: "22EEL22", course_title: "Engineering Practices Laboratory"},
		]
};

const gradeOptions = {
    grades: [
        {grade_letter: "O - (Outstanding)"},
        {grade_letter: "A+ - (Excellent)"},
        {grade_letter: "A - (Very Good)"},
        {grade_letter: "B+ - (Good)"},
        {grade_letter: "B - (Average)"},
        {grade_letter: "C - (Satisfactory)"},
        {grade_letter: "U - (Re-appearance)"},
        {grade_letter: "AB - (Absent)"},
        {grade_letter: "W - (Withdrawal)"},
        {grade_letter: "Absent"}
    ]
};

const selectedSem = document.getElementById("semester-num");
const selectedCourse = document.getElementById("selected-course");
const selectedGrades = document.getElementById("selected-grades");

const addSubBtn = document.getElementById("addSubBtn");

function updateSubjectDetails(){

	const semester = selectedSem.value;
	const courses = courseDetails[semester];

	courses.forEach(function(course) {
		const option = document.createElement("p");
		option.textContent = course.course_title;
		selectedCourse.appendChild(option);
	})

	gradeOptions.grades.forEach(function(gradeLetters) {
		const option = document.createElement("option");
		option.value = gradeLetters.grade_letter;
		option.textContent = gradeLetters.grade_letter;
		selectedGrades.appendChild(option);
	})

}

selectedSem.addEventListener("change", updateSubjectDetails); //function calls do not need parantheses inside event listeners.
addSubBtn.addEventListener("click", newSubject)