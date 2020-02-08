import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
import Root from './Root'
import routeConfig from './common/routeConfig'
import {
  IonApp,
  // IonIcon,
  // IonLabel,
  // IonRouterOutlet,
  // IonTabBar,
  // IonTabButton,
  // IonTabs
} from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import { apps, flash, send } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <Root routeConfig={routeConfig} />
  </IonApp>
);
export default App;
