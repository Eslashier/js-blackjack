/**
 * This function returns the card value
 * @param {String | Number} card Example J, K, 7 
 * @returns {Number} return the card value
 */

export const cardValue = ( card ) => {

    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}