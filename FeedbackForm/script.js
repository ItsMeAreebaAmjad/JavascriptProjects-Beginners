// script.js
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');

    // Load existing feedback from localStorage
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.forEach(displayFeedback);

    // Handle form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        const feedback = { name, email, comment };
        feedbacks.push(feedback);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        displayFeedback(feedback);
        feedbackForm.reset();
    });

    // Function to display feedback
    function displayFeedback(feedback) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback');
        feedbackDiv.innerHTML = `
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Comment:</strong> ${feedback.comment}</p>
            <hr>
        `;
        feedbackList.appendChild(feedbackDiv);
    }
});

