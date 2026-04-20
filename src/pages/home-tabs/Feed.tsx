import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonGrid, IonRow, IonItem, IonCol, IonButton } from "@ionic/react";

const Feed: React.FC = () => {

    const cardData = [
        { name: "Hercules" },
        { name: "Zeus" },
        { name: "Poseidon" },
        { name: "Markus" },
        { name: "Diana" },
    ]
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonList inset={true}>

                    {cardData.map((item, index) => (
                        <IonItem>
                            <IonCard>
                                <IonGrid>
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                                    <IonCardHeader>
                                        <IonCardTitle>{item.name}</IonCardTitle>
                                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    </IonCardHeader>

                                    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                                    <IonRow>
                                        <IonButton fill="clear">Like</IonButton>
                                        <IonButton fill="clear">Comment</IonButton>
                                        <IonButton fill="clear">Share</IonButton>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonItem>
                    ))}

                </IonList>
            </IonContent>
        </IonPage >
    );
}
export default Feed;