function CreateModeViewer(props) {

    function saveData(e) {
        e.preventDefault();
        props.onSubmit(e.target.title.value, e.target.content.value);
    }
    return(
        <div>
            <h1>CREATE</h1>
            <div>
            <form className='viewerForm' onSubmit = {saveData}>
                <input type="text" name = "title" placeholder="title"></input>
                <textarea type="text" name = "content" placeholder="desc"></textarea>
                <input type="submit"></input>
            </form>
            </div>
            
        </div>
    );
};




export default CreateModeViewer;