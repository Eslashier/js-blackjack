/**
 * 
 * @param {Array<String>} deck should be a string array
 * @returns {String} returns the card from the deck
 */

export const requestCard = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('There is no cards in the deck');
    }
    const card = deck.pop();
    return card;
}