function ReadModeViewer(props) {
    let data = props.value;
    let _title = null;
    let _desc = null;
    let id = props.Id;
    let mode = props.mode;

    if(mode === 'welcome') {
        _title = data.title;
        _desc = data.desc;
    }
    if(mode === 'read') {
        _title = data[id-1].title;
        _desc = data[id-1].desc;
    }
    console.log("readModeviewer rendered");
    console.log(data);
    console.log(mode);
    return(
        <div>
            <h1>{_title}</h1>
            <p>{_desc}</p>
        </div>
    );
};




export default ReadModeViewer;