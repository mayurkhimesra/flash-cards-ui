import React, { useEffect } from 'react';

export default function FlashCardDetail({ flashCards }) {
    function flip() {
        document.querySelector('.flashCardDetail').classList.add('flip');
        setTimeout(() => {
            document.querySelector('.flashCardAnswer').classList.toggle('hide');
            document.querySelector('.flashCardDetail').classList.remove('flip')
        }, 1000);
    }

    useEffect(() => {
        let answerDiv = document.querySelector('.flashCardAnswer');
        if (answerDiv) {
            answerDiv.classList.add('hide');
        }
    }, [ flashCards.currentCard ]);

    if (!flashCards || !flashCards.currentCard)
        return null;
    
    return (
        <div className="flashCardDetail" onClick={flip}>
            <div className="flashCardTitle">{flashCards.currentCard.title}</div>
            <div className="flashCardQuestion" >{flashCards.currentCard.question}</div>
            <div className="flashCardAnswer hide">{flashCards.currentCard.answer}</div>
        </div>
    );
}