import React, { useEffect, useState } from "react";
import {Carte, getDeck, Joueur, Step} from "../../types";

const useBlackJack = () => {
    const [deck, setDeck] = useState<Carte[]>([]);
    const [step, setStep] = useState<Step>("null");
    const [joueur, setJoueur] = useState<Joueur>({
        cartes: [],
        score: 0,
        type: "joueur",
    });
    const [ia, setIa] = useState<Joueur>({
        cartes: [],
        score: 0,
        type: "ia", 
    })

    const getCardFromJoueur = () => {
        const card = getDeckCard();
        setJoueur({...joueur, cartes: Array.from(joueur.cartes.concat(card))})
    }

    const getDeckCard = () => {
        return deck[Math.floor(Math.random() * deck.length)];
    }

    useEffect(() => {
        setDeck(getDeck());
    }, []);

    const getTotalPlayer = () => {
        let total = 0;
        joueur.cartes.forEach(carte => total += carte.valeur);
        return total
    }
     
    const getTotal = (cartes: Carte[]) => {
        let total = 0;
        cartes.forEach(carte => total += carte.valeur);
        return total
    }

    useEffect(() => {
        const total = getTotalPlayer();
        if(total > 21){
            console.log("loose", total)
            setStep("loose")
        } 
    }, [joueur])

    useEffect(() => {
        switch(step){
            case "start":
                const card1 = getDeckCard();
                const card2 = getDeckCard();
                setJoueur({...joueur, cartes: [card1, card2]});
                break;
            case "playerended":
                const cardsIa = []
                while(getTotal(cardsIa) < getTotalPlayer()) {
                    cardsIa.push(getDeckCard());
                }

                setIa({...ia, cartes: cardsIa});
                break;
            case "endgame":
                if(getTotal(ia.cartes) > 21){
                    setStep("win")
                } else if (getTotal(ia.cartes) > getTotalPlayer()) {
                    setStep("loose");
                } else {
                    setStep("win")
                }
            break;
            case "null":
                default:
                    return;
        }
    }, [step])

return {
    step,
    joueur,
    setStep,
    getCardFromJoueur,
    getTotal,
    ia
}
};

export default useBlackJack