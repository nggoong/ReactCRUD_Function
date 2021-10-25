function UpdateModeViewer(props) {
    let data = Array.from(props.value);


    function submitUpdateData(e) {
        e.preventDefault();
        let index = data.findIndex(i=> i.id == e.target.id.value);
        data[index].title = e.target.title.value;
        data[index].desc = e.target.desc.value;
        props.onSubmit(data);
    }


    return(
        <div>
            <h1>UPDATE</h1>
            <form className='viewerForm' onSubmit = {submitUpdateData}>
                <input type="text" name = "id" placeholder="id"></input>
                <input type="text" name = "title" placeholder="title"></input>
                <textarea type="text" name = "desc" placeholder="desc"></textarea>
                <input type="submit"></input>
            </form>
        </div>
    );
};




export default UpdateModeViewer;