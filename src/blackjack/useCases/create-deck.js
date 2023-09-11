import _ from 'underscore';


/**
 * This function creates a new deck
 * @param {Array<String>} cardTypes Example: ['C','D','H','S']
 * @param {Array<String>} specialCardTypes Example: ['A','J','Q','K']
 * @returns {Array<String>} return a new deck
 */


export const createDeck = (cardTypes, specialCardTypes) => {

    if (!cardTypes || cardTypes.length === 0) 
        throw new Error('CardTypes is mandatory as string array');
    
    if (!specialCardTypes || specialCardTypes.length === 0) 
        throw new Error('CardTypes is mandatory as string array');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let cardType of cardTypes) {
            deck.push(i + cardType);
        }
    }

    for (let cardType of cardTypes) {
        for (let specialCardType of specialCardTypes) {
            deck.push(specialCardType + cardType);
        }
    }
    return _.shuffle(deck);
}