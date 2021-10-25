function Subject(props) {
    let dataArr = props.subject;
    let list = [];
    console.log('render');
    


    // onClick이벤트 구현

    function showSubject(e) {
        e.preventDefault();
        props.onChangeID(e.target.dataset.id);
    }

    for(let i = 0; i< dataArr.length; i++) {
        list.push(<li key={dataArr[i].id}><a href="/"  data-id = {dataArr[i].id} onClick = {showSubject}>
            {dataArr[i].title}
            </a></li>)
    }
    return(
        <div className = 'subject'>
            {list}
        </div>
    );
};




export default Subject;