function Control(props) {
    let dataArr = props.value;
    let list = [];
    

    for(let i = 0; i<dataArr.length; i++) {
        list.push(<li key={dataArr[i].id}><a href="/">{dataArr[i].menu}</a></li>)
    }

    return(
        <div className='control'>
            {list}
        </div>
    );
};




export default Control;