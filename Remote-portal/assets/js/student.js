document.addEventListener('DOMContentLoaded', () => {
    const studentQuestionsContainer = document.getElementById('student-questions');
    const assessmentData = JSON.parse(localStorage.getItem('assessmentData'));

    if (!assessmentData) {
        studentQuestionsContainer.innerHTML = '<p>தற்போது கேள்விகள் எதுவும் கிடைக்கவில்லை.</p>';
        return;
    }
    if (assessmentData) {
        // Display the assessment details
        const assessmentDetails = `
            <h2>மதிப்பீட்டு விவரங்கள்</h2>
            <p><strong>மதிப்பீட்டு பெயர்:</strong> ${assessmentData.assessmentName}</p>
            <p><strong>பாடம்:</strong> ${assessmentData.subject}</p>
            <p><strong>வழிமுறைகள்:</strong> ${assessmentData.instructions}</p>
        `;

        document.getElementById('student-questions').insertAdjacentHTML('beforebegin', assessmentDetails);

        // Load MCQs, short answers, and long answers (if needed)
        // (You can dynamically generate the question forms here if necessary)
    }

    // Display MCQs
    if (assessmentData.mcqs.length > 0) {
        const mcqSection = document.createElement('div');
        mcqSection.innerHTML = '<h2>பல தேர்வு கேள்விகள்</h2>';
        assessmentData.mcqs.forEach((mcq, index) => {
            const mcqForm = document.createElement('div');
            mcqForm.innerHTML = `
                <p>${index + 1}. ${mcq.question}</p>
                <label><input type="radio" name="mcq-${index}" value="A"> ${mcq.options.A}</label><br>
                <label><input type="radio" name="mcq-${index}" value="B"> ${mcq.options.B}</label><br>
                <label><input type="radio" name="mcq-${index}" value="C"> ${mcq.options.C}</label><br>
                <label><input type="radio" name="mcq-${index}" value="D"> ${mcq.options.D}</label>
            `;
            mcqSection.appendChild(mcqForm);
        });
        studentQuestionsContainer.appendChild(mcqSection);
    }

    // Display short answer questions
    if (assessmentData.shortAnswers.length > 0) {
        const shortAnswerSection = document.createElement('div');
        shortAnswerSection.innerHTML = '<h2>சுருக்கமான பதில் கேள்விகள்</h2>';
        assessmentData.shortAnswers.forEach((shortAnswer, index) => {
            const shortAnswerForm = document.createElement('div');
            shortAnswerForm.innerHTML = `
                <p>${index + 1}. ${shortAnswer.question}</p>
                <textarea placeholder="உங்கள் பதிலை உள்ளிடவும்" name="short-answer-${index}"></textarea>
            `;
            shortAnswerSection.appendChild(shortAnswerForm);
        });
        studentQuestionsContainer.appendChild(shortAnswerSection);
    }

    // Display long answer questions
    if (assessmentData.longAnswers.length > 0) {
        const longAnswerSection = document.createElement('div');
        longAnswerSection.innerHTML = '<h2>நீண்ட பதில் கேள்விகள்</h2>';
        assessmentData.longAnswers.forEach((longAnswer, index) => {
            const longAnswerForm = document.createElement('div');
            longAnswerForm.innerHTML = `
                <p>${index + 1}. ${longAnswer.question}</p>
                <textarea placeholder="உங்கள் பதிலை உள்ளிடவும்" name="long-answer-${index}"></textarea>
            `;
            longAnswerSection.appendChild(longAnswerForm);
        });
        studentQuestionsContainer.appendChild(longAnswerSection);
    }

    // Handle answer submission
    document.getElementById('submit-answers').addEventListener('click', () => {
        const studentAnswers = {
            mcqs: [],
            shortAnswers: [],
            longAnswers: []
        };

        // Collect MCQ answers
        assessmentData.mcqs.forEach((mcq, index) => {
            const selectedOption = document.querySelector(`input[name="mcq-${index}"]:checked`);
            studentAnswers.mcqs.push({
                question: mcq.question,
                selectedAnswer: selectedOption ? selectedOption.value : 'No answer'
            });
        });

        // Collect short answer responses
        assessmentData.shortAnswers.forEach((shortAnswer, index) => {
            const shortAnswerText = document.querySelector(`textarea[name="short-answer-${index}"]`).value;
            studentAnswers.shortAnswers.push({
                question: shortAnswer.question,
                answer: shortAnswerText || 'No answer'
            });
        });

        // Collect long answer responses
        assessmentData.longAnswers.forEach((longAnswer, index) => {
            const longAnswerText = document.querySelector(`textarea[name="long-answer-${index}"]`).value;
            studentAnswers.longAnswers.push({
                question: longAnswer.question,
                answer: longAnswerText || 'No answer'
            });
        });

        // You can now submit studentAnswers to the server or save it locally
        console.log(studentAnswers); // For debugging, replace this with actual submission logic

        // Show success message
        alert('பதில்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!');
    });
});
