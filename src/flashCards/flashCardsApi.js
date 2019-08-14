class FlashCardsApi {
    fetchCards() {
        const cards = [
            {
                "slug": "My_First_Card",
                "title": "My First Card",
                "question": "Onomatopoeia"
            },
            {
                "slug": "My_Second_Card",
                "title": "My Second Card",
                "question": "Hyperbole"
            }
        ];

        return new Promise(resolve => 
            setTimeout(() => resolve(cards), 2000)
        );
    }

    fetchCard(slug) {
        let card = null;
        if (slug === "My_First_Card") {
            card = {
                "slug": "My_First_Card",
                "title": "My First Card",
                "question": "Onomatopoeia",
                "answer": "Onomatopoeia, pronounced on-uh-mat-uh–pee–uh, is defined as a word which imitates the natural sounds of a thing."
            }
        } else if (slug === "My_Second_Card") {
            card = {
                "slug": "My_Second_Card",
                "title": "My Second Card",
                "question": "Hyperbole",
                "answer": "Exaggerated statements or claims not meant to be taken literally."
            }
        }

        return new Promise(resolve => 
            setTimeout(() => resolve(card), 500));
    }
}

export default FlashCardsApi;
