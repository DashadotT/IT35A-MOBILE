import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Feed from "./home-tabs/Feed";
import { bookOutline } from "ionicons/icons";

const tabs = [
  { name: "Feed", tab: 'feed', url: "/app/home/feed", icon: bookOutline },
  { name: "Search", tab: 'search', url: "/app/home/search", icon: search },
  { name: "Favorite", tab: 'favorite', url: "/app/home/favorite", icon: star },
]

const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>Tabs</IonTitle>
          </IonToolbar>
          {tabs.map((tab, index) => (
            <IonTabButton key={index} tab={tab.tab}>
              <IonIcon icon={tab.icon} />
              <IonLabel>{tab.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home" />
          <Route to="/app/feed" />

          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorites} />
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;