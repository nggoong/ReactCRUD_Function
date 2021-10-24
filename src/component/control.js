function Control(props) {
    let dataArr = props.value;
    let list = [];
    
    function listClickEvent(e) {
        e.preventDefault();
        props.onChangeMode(e.target.dataset.id);
        console.log("[control.js] target.dataset.id  " + e.target.dataset.id);
    }

    for(let i = 0; i<dataArr.length; i++) {
        list.push(<li key={dataArr[i].id}><a href="/" data-id = {dataArr[i].id}
        onClick = {listClickEvent}>
            {dataArr[i].mode}
            </a></li>)
    }

    return(
        <div className='control'>
            {list}
        </div>
    );
};




export default Control;