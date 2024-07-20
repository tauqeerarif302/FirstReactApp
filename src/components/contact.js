export const Contact = () => {
    return (
        <div className="formContact">
            <h1>Contact Here...</h1>
            <form method="post">
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your Email" />
                <textarea placeholder="Enter your Message" rows="10" cols="10"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}