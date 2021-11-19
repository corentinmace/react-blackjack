import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonModal } from '@ionic/react';
import './Home.css';
import { 
  readerOutline,
  gameController,
  close
 } from "ionicons/icons"
import useBlackJack from '../../hooks/useBlackJack';
import CardComponent from '../../components/CardComponent/iindex';



const Home: React.FC = () => {
  const { step, joueur, setStep, getCardFromJoueur, ia }= useBlackJack()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton routerLink="/rules">
              <IonIcon slot="start" icon={readerOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <img src="assets/images/blackjack.png" alt="" />
            BlackJack
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
          {step === "null" && (
           <IonCol>
             <IonButton expand="full" onClick={() => setStep("start")}>
               <IonIcon slot="start" icon={gameController} />
               Commmencer la partie
               </IonButton>
           </IonCol> 
          )}
          {step === "start" && (
         <React.Fragment>
          <IonCol size="6" >
            <IonButton color="tertiary" onClick={getCardFromJoueur}>Tirer une carte</IonButton>
            <IonButton color="danger" onClick={() => { setStep("playerended")}}>Stop</IonButton>
          </IonCol>
          <IonCol size="6">
          {joueur.cartes.map((carte, index) => { 
              return <CardComponent key={index} carte={carte} />
            })}
          </IonCol>
         </React.Fragment>
          )}
          {(step === "loose" || step === "win") &&
          <React.Fragment>
            <IonCol size="6">
              <IonButton onClick={() => setStep("start")}>Recommencer</IonButton>
            </IonCol>
            <IonCol size="6">
              Vous avez { step === "win" ? "gagné" : "perdu"}
            </IonCol>
          </React.Fragment>
          } 

          </IonRow>
        </IonGrid>
        <IonModal isOpen={step === "playerended"}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot='primary'>
                <IonButton onClick={() => setStep("endgame")}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonButtons>
              Croupier
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonGrid>
              <IonRow>
              {ia.cartes.map((carte, index) => { 
                return (
                <IonCol size="12">
                  <CardComponent key={`ia.${index}`} carte={carte} />
                </IonCol>
                )
              })}
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
