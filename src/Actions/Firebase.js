import firebase from 'firebase'
import { config } from '../Constants/firebase';

firebase.initializeApp(config);

export default firebase.database();
