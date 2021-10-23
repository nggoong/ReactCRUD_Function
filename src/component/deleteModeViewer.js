function DeleteModeViewer() {
    return(
        <div>
            <h1>DELETE</h1>
            <form className='viewerForm'>
                <input type="text" name = "title" placeholder="title"></input>
                <textarea type="text" name = "content" placeholder="desc"></textarea>
            </form>
        </div>
    );
};




export default DeleteModeViewer;