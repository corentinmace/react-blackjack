import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import './Home.css';
import { 
  readerOutline
 } from "ionicons/icons"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton routerLink="/rules">
              <IonIcon slot="start" icon={readerOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>BlackJack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Home;
