import { requestCard, cardValue, createCardHTML } from ".";

/**
 * 
 * @param {Number} minimumScore 
 * @param {HTMLElement} htmlScore 
 * @param {HTMLElement} computerCardsDiv 
 * @param {Array<string>} deck 
 */
export const computerTurn = ( minimumScore, htmlScore, computerCardsDiv, deck = [],  ) => {

    if(!minimumScore)
        throw new Error('MinimumScore is mandatory');

    if(!htmlScore)
        throw new Error('htmlScore is mandatory');

    let computerScore = 0;

    do {
        const card = requestCard(deck);

        computerScore = computerScore + cardValue( card );
        htmlScore[1].innerText = computerScore;
        
        const imgCard = createCardHTML(card);
        computerCardsDiv.append( imgCard );

        if( minimumScore > 21 ) {
            break;
        }

    } while(  (computerScore < minimumScore)  && (minimumScore <= 21 ) );

    setTimeout(() => {
        if( computerScore === minimumScore ) {
            alert('Nadie gana :(');
        } else if ( minimumScore > 21 ) {
            alert('Computadora gana')
        } else if( computerScore > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}