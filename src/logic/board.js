import { WINNER_COMBO } from '../constants' 

export const checkWinnerFrom = (boardTocheck) => {
    for (const combo of WINNER_COMBO) { 
        const [a, b, c] = combo 
        if (boardTocheck[a] && 
            boardTocheck[a] === boardTocheck[b] && 
            boardTocheck[a] === boardTocheck[c]) {  
            return boardTocheck[a] 
        }
    }
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((value) => value !== null) 
}
