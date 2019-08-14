import React from 'react';

export default function FlashCardList({flashCards, fetchCard}) {
    if (!flashCards || !flashCards.cards)
        return <div>No flashcards available yet</div>;
    
    return (
        <ul className="flashCardList">
            {flashCards.cards.map(flashCard => (
                <li key={flashCard.slug} onClick={() => fetchCard(flashCard.slug)}>{flashCard.title}</li>
            ))}
        </ul>
    );
}