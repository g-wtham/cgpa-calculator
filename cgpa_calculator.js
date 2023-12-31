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
const selectedGrade = document.getElementById("selected-grades");
const addAnotherSubBtn = document.getElementById("addSubBtn");

//function to update course & grade details after selecting the semester from dropdown
function updateDetails(){
	const semesterNumber = selectedSem.value;
	const semesterCourse = courseDetails[semesterNumber];

	// Update course details in dropdown based on selected semester //
	semesterCourse.forEach((course) => {
		const option = document.createElement("option");
		option.value = course.course_code;
		option.textContent = course.course_title;
		selectedCourse.appendChild(option);
	});

	const grades = gradeOptions.grades; //grades - array of objects; gradeOptions - object which have array of objects (i.e. - grades)

	grades.forEach((grade) => { //loop through each grade object, in the array of objects, i.e. grades
		const option = document.createElement("option");
		option.textContent = grade.grade_letter;
		selectedGrade.appendChild(option);
	})
	
}

const addAnother = document.createElement("div");
divCounter = 1;
addAnother.classList.add(`newSub + ${divCounter}`);
divCounter++;

selectedSem.addEventListener("change", updateDetails);