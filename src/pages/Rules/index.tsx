import { IonContent, IonPage, IonHeader, IonButtons, IonIcon, IonButton, IonToolbar, IonTitle, IonBackButton,  } from "@ionic/react";
import { readerOutline } from "ionicons/icons";
import './index.css'
import React from "react";

const Rules = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="secondary">
                <IonBackButton defaultHref="home" />
                </IonButtons>
                <IonTitle>Rules</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>
                    Il consiste à battre la Banque, représentée par le Croupier, sans dépasser 21 sinon vous perdez votre mise. Si vous atteignez le Blackjack (soit une carte valant 10 + un As) votre mise est payée 3 pour 2, si vous gagnez contre le Croupier, mais sans atteindre 21 points, vous remportez 1 fois votre mise.
                </p>
            </IonContent>
        </IonPage>
    )
}

export default Rules;