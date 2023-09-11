/**
 * 
 * @param {*} card 
 * @returns {HTMLImageElement}
 */

export const createCardHTML = ( card ) => {

    if(!card) throw new Error('Card is mandatory')

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`;
    imgCard.classList.add('carta');

    return imgCard;
}