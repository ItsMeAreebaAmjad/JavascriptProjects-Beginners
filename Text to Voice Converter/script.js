document.getElementById('convert-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'en-US'; // You can change this to any supported language
    window.speechSynthesis.speak(speech);
});
