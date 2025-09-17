function Chatting_space() {
    return (
        <>
            <div className="container">
                <div className="texts_holder">
                    <p>examples:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nulla voluptate repellat officiis provident recusandae aliquid, laborum,</p>
                    <p>corporis inventore d istinctio reiciendis sint esse numquam tempore hic neque minus, natus alias.</p>
                </div>
            </div>
            <div className="tools">
                <div className="texting">
                    <input type="text" name="text" id="text" placeholder="write something"/>
                    <button className="text_btn">
                        <i className="bi bi-send"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Chatting_space