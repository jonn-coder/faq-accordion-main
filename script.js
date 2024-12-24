let questionsEl = document.querySelectorAll('.question');
let answersEl = document.querySelectorAll('.answer');

let i = 0;
for(i; i < questionsEl.length; i++) {
    let questionEl = questionsEl[i];
    let answerEl = questionEl.parentNode.querySelector('.answer');
    questionEl.addEventListener('click', () => { 
        let height = answerEl.scrollHeight;
        questionEl.classList.toggle('active');
        console.log(questionEl.classList);
        
        if (questionEl.classList.contains('active')) {
            answersEl.forEach((ans) => {
                ans.style.maxHeight = '0px';
                ans.parentNode.querySelector('.question').classList.remove('active');
                
            })
            answerEl.style.maxHeight = `${height}px`;
            questionEl.classList.toggle('active');
        }
        else {
            answerEl.style.maxHeight = '0px';
        }
        
    })
}
