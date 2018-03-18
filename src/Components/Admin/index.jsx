import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest'
import { QuestionList, QuestionEdit, QuestionCreate } from './Questions';
import { AnswerList, AnswerEdit, AnswerCreate } from './Answers';
import {RestClient, AuthClient} from 'aor-firebase-client';


const config = {
  apiKey: "AIzaSyAh1cuVHX46Yd8DFOSJmom4uLQO8ANoCCM",
  authDomain: "quiz-game-6fdc5.firebaseapp.com",
  databaseURL: "https://quiz-game-6fdc5.firebaseio.com",
  projectId: "quiz-game-6fdc5",
  storageBucket: "quiz-game-6fdc5.appspot.com",
  messagingSenderId: "114955671947"
};


const trackedResources = ['questions', 'answers']

const App = () => (
    <Admin restClient={RestClient(trackedResources, config)} authClient={AuthClient}>
       <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} remove={Delete} />
       <Resource name="answers" list={AnswerList} edit={AnswerEdit} remove={Delete} />
    </Admin>
);

export default App;
