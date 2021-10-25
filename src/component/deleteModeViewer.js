function DeleteModeViewer(props) {
    
    let dataLength = props.value.length;

    function sendDeleteId(e) {
        e.preventDefault();
        if(dataLength < Number(e.target.id.value) || Number(e.target.id.value) <= 0) {
            alert("index 경고!");
            e.target.id.value = "";
            return;
        }
        else props.deleteFunction(e.target.id.value);
        e.target.id.value = "";
    }
    return(
        <div>
            <h1>DELETE</h1>
            <form className='viewerForm' onSubmit = {sendDeleteId}>
                <input type="text" name = "id" placeholder = "id" ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};




export default DeleteModeViewer;