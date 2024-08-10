const Create = () => {
    return ( 
        <>
        <h1>Create</h1>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
            <button>submit</button>
        </form>
        </>
     );
}
 
export default Create;