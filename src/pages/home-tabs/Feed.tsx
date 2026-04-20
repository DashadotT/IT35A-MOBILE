import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from "@ionic/react";

const Feed: React.FC = () => {

    const AncientHeroes = [
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

            <IonContent>
                <IonList inset={true}>
                    {AncientHeroes.map((item, index) => (
                        <IonCard>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle>{item.name}</IonCardTitle>
                                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                        </IonCard>
                    ))}

                </IonList>
            </IonContent>
        </IonPage>
    );
}
export default Feed;