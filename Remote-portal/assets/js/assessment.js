document.addEventListener('DOMContentLoaded', () => {
    const mcqContainer = document.getElementById('mcq-container');
    const shortAnswerContainer = document.getElementById('short-answer-container');
    const longAnswerContainer = document.getElementById('long-answer-container');

    // Adding MCQs
    document.getElementById('add-mcq').addEventListener('click', () => {
        const mcqForm = document.createElement('div');
        mcqForm.innerHTML = `
            <label>கேள்வி:</label>
            <textarea placeholder="பல தேர்வு கேள்வியை உள்ளிடவும்"></textarea>
            <label>விடை ஆா் A:</label>
            <input type="text" placeholder="விடை ஆா் A">
            <label>விடை ஆா் B:</label>
            <input type="text" placeholder="விடை ஆா் B">
            <label>விடை ஆா் C:</label>
            <input type="text" placeholder="விடை ஆா் C">
            <label>விடை ஆா் D:</label>
            <input type="text" placeholder="விடை ஆா் D">
            <label>சரியான விடை:</label>
            <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        `;
        mcqContainer.appendChild(mcqForm);
    });

    // Adding short answer questions
    document.getElementById('add-short-answer').addEventListener('click', () => {
        const shortAnswerForm = document.createElement('div');
        shortAnswerForm.innerHTML = `
            <label>கேள்வி:</label>
            <textarea placeholder="சுருக்கமான பதில் கேள்வியை உள்ளிடவும்"></textarea>
        `;
        shortAnswerContainer.appendChild(shortAnswerForm);
    });
    document.addEventListener('DOMContentLoaded', () => {
        const facultyNameDisplay = document.getElementById('faculty-name-display');
        
        // Retrieve the faculty name from localStorage
        const facultyName = localStorage.getItem('facultyName');
        
        if (facultyName) {
            facultyNameDisplay.textContent = facultyName;
        } else {
            facultyNameDisplay.textContent = 'Faculty'; // Fallback if no name is found
        }
    });
    
    

    // Adding long answer questions
    document.getElementById('add-long-answer').addEventListener('click', () => {
        const longAnswerForm = document.createElement('div');
        longAnswerForm.innerHTML = `
            <label>கேள்வி:</label>
            <textarea placeholder="நீண்ட பதில் கேள்வியை உள்ளிடவும்"></textarea>
        `;
        longAnswerContainer.appendChild(longAnswerForm);
    });

    // Publishing the questions
    document.getElementById('publish').addEventListener('click', () => {
        // Collect the assessment details (name, subject, and instructions)
        const assessmentName = document.getElementById('assessment-name').value;
        const subject = document.getElementById('subject').value;
        const instructions = document.getElementById('instructions').value;

        // Collect questions
        const assessmentData = {
            assessmentName: assessmentName,
            subject: subject,
            instructions: instructions,
            mcqs: [],
            shortAnswers: [],
            longAnswers: []
        };

        // Collect MCQs
        mcqContainer.querySelectorAll('div').forEach(mcq => {
            assessmentData.mcqs.push({
                question: mcq.querySelector('textarea').value,
                options: {
                    A: mcq.querySelector('input[placeholder="விடை ஆா் A"]').value,
                    B: mcq.querySelector('input[placeholder="விடை ஆா் B"]').value,
                    C: mcq.querySelector('input[placeholder="விடை ஆா் C"]').value,
                    D: mcq.querySelector('input[placeholder="விடை ஆா் D"]').value
                },
                correctAnswer: mcq.querySelector('select').value
            });
        });

        // Collect short answers
        shortAnswerContainer.querySelectorAll('div').forEach(shortAnswer => {
            assessmentData.shortAnswers.push({
                question: shortAnswer.querySelector('textarea').value
            });
        });

        // Collect long answers
        longAnswerContainer.querySelectorAll('div').forEach(longAnswer => {
            assessmentData.longAnswers.push({
                question: longAnswer.querySelector('textarea').value
            });
        });

        // Store all assessment data in localStorage
        localStorage.setItem('assessmentData', JSON.stringify(assessmentData));

        // Redirect to student page
        window.location.href = 'student_page.html';
    });
});
