import './App.css';
import React, { useState } from 'react';
import Header from './component/header';
import Subject from './component/Subject';
import Control from './component/control';
import CreateModeViewer from './component/createModeViewer';
import UpdateModeViewer from './component/updateModeViewer';
import DeleteModeViewer from './component/deleteModeViewer';
import ReadModeViewer from './component/readModeViewer';

function App() {
  let Viewer = null;
  let [selectedSubjectId, setSelectedSubjectId] = useState(0);
  let [mode, setMode] = useState('welcome')
  let [title, setTitle] = useState('React');
  let welcome = {title:'Welcome', desc:'welcome to my site'};
  let [subject, setSubject] = useState([{id:1, title:'HTML', desc:'HTML is for information'}, {id:2, title:'CSS', desc:'CSS is for style'},
{id:3, title:'JAVASCRIPT', desc:'javascript is for dynamic'}]);

  let subjectArrLength = subject.length;


function changeTitle(value) {
  setTitle(value);
}

function changeSelectedSubject(id) {
  setSelectedSubjectId(id);
  setMode('read');
}


if(mode === 'welcome'){
  Viewer = <ReadModeViewer value = {welcome}  mode = {mode} Id={selectedSubjectId}></ReadModeViewer>
}

else if (mode === 'read') {
  Viewer = <ReadModeViewer value = {subject}  mode = {mode} Id={selectedSubjectId}></ReadModeViewer>
}

else if(mode === 'create') {
  Viewer = <CreateModeViewer></CreateModeViewer>
}
else if(mode === 'update') {
  Viewer = <UpdateModeViewer></UpdateModeViewer>
}
else if(mode === 'delete') {
  Viewer = <DeleteModeViewer></DeleteModeViewer>
}


  return (
    <div>
  <Header title={title} onReceiv={changeTitle}></Header>
  <Subject subject={subject} onChangeID = {changeSelectedSubject}></Subject>
  <div className="viewer">
  {Viewer}
  </div>
    
  </div>
  );
 
}

export default App;
