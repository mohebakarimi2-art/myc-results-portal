
/* =====================================================
   MULTI PURPOSE YOUTH CENTER (MYC PD4)
   FREELANCING CLASS RESULTS PORTAL 2026
   SECOND MONTHLY EXAMINATION
===================================================== */


/* =====================================================
   1. STUDENT RECORDS
===================================================== */

const students = [
    {
        studentId: "FC-2026-001",
        fullName: "Hamida Khaliqi",
        fatherName: "Jan Mohammad",
        partA: 20,
        partB: 13,
        partC: 12,
        partD: 5,
        total: 50,
        percentage: 50.0,
        performance: "Pass",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-002",
        fullName: "Yalda Hashimi",
        fatherName: "Ahmad Wali",
        partA: 20,
        partB: 22,
        partC: 30,
        partD: 17,
        total: 89,
        percentage: 89.0,
        performance: "Very Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-003",
        fullName: "Sahar Sohrabi",
        fatherName: "Abdul Hamid",
        partA: 20,
        partB: 17,
        partC: 22,
        partD: 15,
        total: 74,
        percentage: 74.0,
        performance: "Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-004",
        fullName: "Safiya Rohany",
        fatherName: "Sayed Jamaluddin",
        partA: 20,
        partB: 21,
        partC: 28,
        partD: 17,
        total: 86,
        percentage: 86.0,
        performance: "Very Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-005",
        fullName: "Lida Akbari",
        fatherName: "Abdul Karim",
        partA: 20,
        partB: 12,
        partC: 15,
        partD: 16,
        total: 63,
        percentage: 63.0,
        performance: "Satisfactory",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-006",
        fullName: "Hadia",
        fatherName: "Mohammad Arif",
        partA: 20,
        partB: 17,
        partC: 25,
        partD: 10,
        total: 72,
        percentage: 72.0,
        performance: "Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-007",
        fullName: "Shadukht Zuhal Madad",
        fatherName: "Sultanali Madad",
        partA: 20,
        partB: 20,
        partC: 33,
        partD: 20,
        total: 93,
        percentage: 93.0,
        performance: "Excellent",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-008",
        fullName: "Mahboba Mirzae",
        fatherName: "Maqsood Mirzae",
        partA: 20,
        partB: 21,
        partC: 31,
        partD: 13,
        total: 85,
        percentage: 85.0,
        performance: "Very Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-009",
        fullName: "Ghizal",
        fatherName: "Karimullah",
        partA: 14,
        partB: 10,
        partC: 30,
        partD: 19,
        total: 73,
        percentage: 73.0,
        performance: "Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-010",
        fullName: "Homa Barakzai",
        fatherName: "Abdul Bari",
        partA: 10,
        partB: 15,
        partC: 5,
        partD: 2,
        total: 32,
        percentage: 32.0,
        performance: "Needs Improvement",
        status: "Needs Improvement",
        published: true
    },
    {
        studentId: "FC-2026-011",
        fullName: "Stayesh Yousufi",
        fatherName: "Sakhi Ahmad",
        partA: 18,
        partB: 15,
        partC: 25,
        partD: 15,
        total: 73,
        percentage: 73.0,
        performance: "Good",
        status: "Passed",
        published: true
    },
    {
        studentId: "FC-2026-012",
        fullName: "Momina Mohammadi",
        fatherName: "Nazir Ahmad",
        published: false
    },
    {
        studentId: "FC-2026-013",
        fullName: "Maryam Shahin",
        fatherName: "Abdul Qayoum",
        published: false
    }
];


/* =====================================================
   2. MAXIMUM MARKS
===================================================== */

const maximumMarks = {
    partA: 20,
    partB: 24,
    partC: 36,
    partD: 20
};


/* =====================================================
   3. PERFORMANCE CLASSIFICATION
===================================================== */

function getPerformance(percentage) {

    if (percentage >= 90) {
        return {
            level: "Excellent",
            cssClass: "performance-excellent",
            description:
                "Outstanding achievement! You have demonstrated excellent understanding and strong examination performance. Keep challenging yourself and continue developing your skills."
        };
    }

    if (percentage >= 80) {
        return {
            level: "Very Good",
            cssClass: "performance-very-good",
            description:
                "Very good work! You have demonstrated a strong understanding of the course. Continue practising and strengthening your digital and freelancing skills."
        };
    }

    if (percentage >= 70) {
        return {
            level: "Good",
            cssClass: "performance-good",
            description:
                "Good progress! You have demonstrated a solid understanding of many course topics. Continue practising to improve your accuracy and practical abilities."
        };
    }

    if (percentage >= 50) {
        return {
            level: "Satisfactory",
            cssClass: "performance-satisfactory",
            description:
                "You have achieved a satisfactory result. Focus on the sections where you received lower marks and dedicate more time to practice and revision."
        };
    }

    return {
        level: "Needs Improvement",
        cssClass: "performance-needs-improvement",
        description:
            "There is room for improvement. Do not be discouraged. Review the course materials, ask questions when needed, and practise regularly to strengthen your understanding."
    };
}


/* =====================================================
   4. SECTION-SPECIFIC FEEDBACK
===================================================== */

function getPartFeedback(percentage) {

    if (percentage >= 90) {
        return {
            level: "Excellent",
            description:
                "Excellent understanding of this section. You demonstrated strong knowledge and accuracy. Maintain this level of performance."
        };
    }

    if (percentage >= 80) {
        return {
            level: "Very Good",
            description:
                "You demonstrated very good understanding of this section. Continue practising to strengthen your knowledge and confidence."
        };
    }

    if (percentage >= 70) {
        return {
            level: "Good",
            description:
                "You have a good understanding of the main concepts. More practice will help you improve your performance further."
        };
    }

    if (percentage >= 50) {
        return {
            level: "Satisfactory",
            description:
                "You have demonstrated a basic understanding of this section. Review the topics and practise more to improve your results."
        };
    }

    return {
        level: "Needs Improvement",
        description:
            "This section requires additional attention. Review the related lessons, practise the exercises, and seek guidance when necessary."
    };
}


/* =====================================================
   5. OVERALL INSTRUCTOR FEEDBACK
===================================================== */

function getInstructorFeedback(parts, percentage) {

    const strengths = parts.filter(part =>
        part.percentage >= 80
    );

    const improvementAreas = parts.filter(part =>
        part.percentage < 50
    );

    let feedback = "";

    if (percentage >= 90) {
        feedback =
            "Excellent achievement! Your examination results reflect outstanding effort and understanding. Continue applying your knowledge through practical freelancing projects and independent learning.";
    }

    else if (percentage >= 80) {
        feedback =
            "You have performed very well in this examination. Your progress demonstrates a strong understanding of the course. Continue developing your practical abilities and preparing for more advanced tasks.";
    }

    else if (percentage >= 70) {
        feedback =
            "You have made good progress. Your results show a solid foundation in the course. With regular practice and greater attention to detail, you can achieve even stronger results.";
    }

    else if (percentage >= 50) {
        feedback =
            "You have achieved a satisfactory result. We encourage you to review the examination topics, strengthen your weaker areas, and participate actively in practical exercises.";
    }

    else {
        feedback =
            "This result indicates that additional learning support and practice are needed. Do not lose motivation. Review the lessons, ask your instructor for guidance, and work consistently towards improvement.";
    }

    if (strengths.length > 0) {
        feedback +=
            " Your strongest examination section" +
            (strengths.length > 1 ? "s are " : " is ") +
            strengths.map(part => part.name).join(", ") +
            ".";
    }

    if (improvementAreas.length > 0) {
        feedback +=
            " Give additional attention to " +
            improvementAreas.map(part => part.name).join(", ") +
            " and practise the related topics.";
    }

    return feedback;
}


/* =====================================================
   6. FIND STUDENT
===================================================== */

function findStudent(studentId, fullName) {

    const normalize = value =>
        String(value).trim().replace(/\s+/g, " ").toLowerCase();

    return students.find(student =>
        normalize(student.studentId) === normalize(studentId) &&
        normalize(student.fullName) === normalize(fullName)
    );
}


/* =====================================================
   7. ANIMATED NUMBER COUNTER
===================================================== */

function animateNumber(element, target, suffix = "", duration = 1000) {

    if (!element) return;

    const finalValue = Number(target);

    if (!Number.isFinite(finalValue)) {
        element.textContent = "—";
        return;
    }

    const startTime = performance.now();

    function update(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            finalValue * easedProgress;

        element.textContent =
            `${currentValue.toFixed(1)}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    element.textContent = `0${suffix}`;

    requestAnimationFrame(update);
}


/* =====================================================
   8. STUDENT SEARCH
===================================================== */

const resultForm = document.getElementById("resultForm");

resultForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentId =
        document.getElementById("studentId").value.trim();

    const fullName =
        document.getElementById("fullName").value.trim();

    const message =
        document.getElementById("message");

    const button =
        document.getElementById("searchButton");

    const resultSection =
        document.getElementById("resultSection");

    // Hide previous results before a new search.
    resultSection.hidden = true;

    message.className = "message";
    message.textContent = "";

    button.disabled = true;
    button.textContent = "Searching...";

    const student = findStudent(studentId, fullName);

    button.disabled = false;
    button.textContent = "Check My Results";

    if (!student) {

        message.className = "message error";

        message.textContent =
            "No matching student record found. Please check your Student ID and full name.";

        return;
    }

    if (student.published !== true) {

        message.className = "message error";

        message.textContent =
            "Your results have not been published yet. Please check again later.";

        return;
    }

    message.className = "message success";

    message.textContent =
        "Your examination report is ready. Your results have been found successfully.";

    displayResults(student);
});


/* =====================================================
   9. DISPLAY STUDENT RESULTS
===================================================== */

function displayResults(student) {

    // Student information
    document.getElementById("studentName").textContent =
        student.fullName;

    document.getElementById("displayStudentId").textContent =
        student.studentId;

    document.getElementById("fatherName").textContent =
        student.fatherName;

    document.getElementById("examStatus").textContent =
        student.status;


    // Calculate the score from individual examination parts.
    const parts = [
        {
            name: "Part A",
            score: Number(student.partA),
            max: maximumMarks.partA,
            title: "Examination Section A"
        },
        {
            name: "Part B",
            score: Number(student.partB),
            max: maximumMarks.partB,
            title: "Examination Section B"
        },
        {
            name: "Part C",
            score: Number(student.partC),
            max: maximumMarks.partC,
            title: "Examination Section C"
        },
        {
            name: "Part D",
            score: Number(student.partD),
            max: maximumMarks.partD,
            title: "Examination Section D"
        }
    ];

    const total = parts.reduce(
        (sum, part) => sum + part.score,
        0
    );

    const percentage = total;


    // Overall score
    const totalElement =
        document.getElementById("totalScore");

    const percentageElement =
        document.getElementById("percentage");

    totalElement.textContent = `${total}/100`;

    percentageElement.textContent = `${percentage.toFixed(1)}%`;


    // Performance classification
    const performance =
        getPerformance(percentage);

    const gradeBadge =
        document.getElementById("gradeBadge");

    const performanceLevel =
        document.getElementById("performanceLevel");

    const performanceDescription =
        document.getElementById("performanceDescription");

    gradeBadge.textContent = performance.level;

    gradeBadge.className =
        `grade-badge ${performance.cssClass}`;

    performanceLevel.textContent =
        performance.level;

    performanceLevel.className =
        performance.cssClass;

    performanceDescription.textContent =
        performance.description;


    // Overall score animations
    totalElement.textContent = "0/100";

    animateNumber(
        totalElement,
        total,
        "/100",
        1200
    );

    animateNumber(
        percentageElement,
        percentage,
        "%",
        1200
    );


    // Generate section cards
    displayParts(parts);


    // Generate instructor feedback
    document.getElementById("instructorFeedback").textContent =
        getInstructorFeedback(parts, percentage);


    // Automatically fill the complaint form with the
    // currently authenticated student's displayed identity.
    const complaintStudentId =
        document.getElementById("complaintStudentId");

    const complaintFullName =
        document.getElementById("complaintFullName");

    complaintStudentId.value = student.studentId;
    complaintFullName.value = student.fullName;

    complaintStudentId.readOnly = true;
    complaintFullName.readOnly = true;


    // Reset complaint form when a new student's results are opened.
    document.getElementById("complaintForm").reset();

    complaintStudentId.value = student.studentId;
    complaintFullName.value = student.fullName;

    document.getElementById("reviewFields").hidden = true;

    document.getElementById("satisfiedMessage").hidden = true;

    document.getElementById("complaintMessage").textContent = "";

    document.getElementById("complaintMessage").className = "message";

    document.getElementById("reviewPart").required = false;
    document.getElementById("complaintReason").required = false;


    // Show the full examination report, including the complaint form.
    const resultSection =
        document.getElementById("resultSection");

    resultSection.hidden = false;

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   10. GENERATE DETAILED EXAMINATION PART CARDS
===================================================== */

function displayParts(parts) {

    const container =
        document.getElementById("partsContainer");

    container.replaceChildren();

    parts.forEach((part, index) => {

        const percentage =
            (part.score / part.max) * 100;

        const safePercentage =
            Math.max(0, Math.min(100, percentage));

        const feedback =
            getPartFeedback(percentage);


        // Main card
        const card =
            document.createElement("div");

        card.className = "part-card";

        card.style.animationDelay =
            `${index * 0.12}s`;


        // Section name
        const name =
            document.createElement("div");

        name.className = "part-name";

        name.textContent =
            `${part.name} · ${part.title}`;


        // Marks obtained
        const score =
            document.createElement("strong");

        score.textContent =
            `${part.score}/${part.max}`;


        // Marks explanation
        const scoreDetails =
            document.createElement("div");

        scoreDetails.className =
            "part-score-details";

        const obtained =
            document.createElement("span");

        obtained.textContent =
            "Marks obtained";

        const maximum =
            document.createElement("strong");

        maximum.textContent =
            `${part.score} out of ${part.max}`;


        scoreDetails.append(
            obtained,
            maximum
        );


        // Percentage
        const percentageLabel =
            document.createElement("span");

        percentageLabel.className =
            "part-percentage";

        percentageLabel.textContent =
            `${percentage.toFixed(1)}% · ${feedback.level}`;


        // Progress bar
        const track =
            document.createElement("div");

        track.className =
            "progress-track";

        track.setAttribute("role", "progressbar");

        track.setAttribute("aria-label", `${part.name} score`);

        track.setAttribute("aria-valuenow", safePercentage);

        track.setAttribute("aria-valuemin", "0");

        track.setAttribute("aria-valuemax", "100");


        const fill =
            document.createElement("div");

        fill.className =
            "progress-fill";

        fill.style.width = "0%";


        track.appendChild(fill);


        // Detailed section feedback
        const description =
            document.createElement("p");

        description.textContent =
            feedback.description;


        // Assemble the card
        card.append(
            name,
            score,
            scoreDetails,
            percentageLabel,
            track,
            description
        );

        container.appendChild(card);


        // Animate the progress bar after rendering.
        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                fill.style.width =
                    `${safePercentage}%`;

            });

        });

    });

}


/* =====================================================
   11. SATISFACTION AND REVIEW FORM
===================================================== */

const satisfactionSelect =
    document.getElementById("satisfaction");

const reviewFields =
    document.getElementById("reviewFields");

const satisfiedMessage =
    document.getElementById("satisfiedMessage");

const reviewPartSelect =
    document.getElementById("reviewPart");

const complaintReason =
    document.getElementById("complaintReason");


satisfactionSelect.addEventListener("change", function() {

    const isDissatisfied =
        this.value === "Not satisfied";

    const isSatisfied =
        this.value === "Satisfied";


    // Display review fields only for dissatisfied students.
    reviewFields.hidden = !isDissatisfied;

    // Display appreciation message for satisfied students.
    satisfiedMessage.hidden = !isSatisfied;


    // Set required fields when necessary.
    reviewPartSelect.required =
        isDissatisfied;

    complaintReason.required =
        isDissatisfied;

});


/* =====================================================
   12. COMPLAINT FORM SUBMISSION
===================================================== */

const complaintForm =
    document.getElementById("complaintForm");

complaintForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentId =
        document.getElementById("complaintStudentId").value.trim();

    const fullName =
        document.getElementById("complaintFullName").value.trim();

    const satisfaction =
        document.getElementById("satisfaction").value;

    const reviewPart =
        document.getElementById("reviewPart").value;

    const reason =
        document.getElementById("complaintReason").value.trim();

    const message =
        document.getElementById("complaintMessage");


    message.className = "message";
    message.textContent = "";


    // Verify that the student has published results.
    const student =
        findStudent(studentId, fullName);

    if (!student || student.published !== true) {

        message.className = "message error";

        message.textContent =
            "Your student information could not be verified. Please search for your results again.";

        return;
    }


    // Check satisfaction response.
    if (
        satisfaction !== "Satisfied" &&
        satisfaction !== "Not satisfied"
    ) {

        message.className = "message error";

        message.textContent =
            "Please select whether you are satisfied with your result.";

        return;
    }


    // Validate review request.
    if (satisfaction === "Not satisfied") {

        if (!reviewPart || !reason) {

            message.className = "message error";

            message.textContent =
                "Please select the examination section and explain your concern.";

            return;
        }

    }


    /*
       IMPORTANT:

       The form is validated, but no complaint submission
       service is connected in this demonstration version.

       Therefore, this code does NOT send or save complaints.
       A secure submission connection is required before
       students can actually send their responses to MYC.
    */

    message.className = "message error";

    message.textContent =
        "Your information is valid, but the submission service is not connected yet. Your response has NOT been sent.";

});


/* =====================================================
   13. INITIAL PAGE SETTINGS
===================================================== */

// Class statistics have been removed.
// No class statistics are loaded.

document.getElementById("resultSection").hidden = true;

