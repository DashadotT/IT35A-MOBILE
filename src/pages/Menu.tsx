import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import Home from './Home';
import { Redirect, Route } from 'react-router';
import { homeOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const navigation = useIonRouter();

    const path = () => {
        (name: 'Home', url: "/app/home", icon:homeOutline)
    }
    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>

                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home}/>
                    <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
                </IonRouterOutlet>

            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;