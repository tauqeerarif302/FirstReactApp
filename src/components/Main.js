
export const Main = () => {
    return (
        <>
        <form method="post" className="form">
            <h1>Add Your Reciepe</h1>
            <input type="text" placeholder="Enter Name" className="input" />
            <textarea placeholder="Enter Descrption"  className="input" rows="5" cols="22"/>
            <input type="file" />
            <button type="submit">Add</button>
        </form>
        </>
    )
}