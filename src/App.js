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
  let controlMode = [{id:1, mode:'create'}, {id:2, mode:'update'}, {id:3, mode:'delete'}];
  let [mode, setMode] = useState('welcome')
  let [title, setTitle] = useState('React');
  let welcome = {title:'Welcome', desc:'welcome to my site'};
  let [subject, setSubject] = useState([{id:1, title:'HTML', desc:'HTML is for information'}, {id:2, title:'CSS', desc:'CSS is for style'},
{id:3, title:'JAVASCRIPT', desc:'javascript is for dynamic'}]);
  // let subjectArrLength = 3;


function changeTitle(value) {
  setTitle(value);
}

function changeSelectedSubject(id) {
  setSelectedSubjectId(id);
  setMode('read');
}

function changeMode(modeID) {
  console.log("app.js the function ChangeMode modeID   " + modeID);
  let index = controlMode.findIndex(i => i.id == modeID)
  console.log("app.js the function ChangeMode index   " + index)
  setMode(controlMode[index].mode);
}
console.log(mode);


function saveTheData(subjectTitle, content) {
  // subjectArrLength = subjectArrLength + 1;
  let subjectArrLength = subject.length;
  let subjectID = subjectArrLength + 1;
  console.log("[app.js] saveTheDatafunction subjectArrLength" + subjectArrLength);
  let tempData = subject.concat({id : subjectID, title : subjectTitle, desc : content})
  setSubject(tempData);
}

function UpdateData(data) {
  setSubject(data);
  console.log(data);
}

function getContent() {
  if(mode === 'welcome'){
    // Viewer = <ReadModeViewer value = {welcome}  mode = {mode} Id={selectedSubjectId}></ReadModeViewer>
    Viewer = <div>안녕하세요</div>
  }
  
  else if (mode === 'read') {
    Viewer = <ReadModeViewer value = {subject}  mode = {mode} Id={selectedSubjectId}></ReadModeViewer>
  }
  
  else if(mode === 'create') {
    Viewer = <CreateModeViewer onSubmit = {saveTheData}></CreateModeViewer>
  }
  else if(mode === 'update') {
    Viewer = <UpdateModeViewer value = {subject} onSubmit={UpdateData}></UpdateModeViewer>
  }
  else if(mode === 'delete') {
    Viewer = <DeleteModeViewer></DeleteModeViewer>
  }

  return Viewer;
}

getContent();





  return (
    <div>
  <Header title={title} onReceiv={changeTitle}></Header>
  <Subject subject={subject} onChangeID = {changeSelectedSubject}></Subject>
  <Control value = {controlMode} onChangeMode = {changeMode}></Control>
  <div className="viewer">
  {Viewer}
  </div>
    
  </div>
  );
 
}

export default App;
