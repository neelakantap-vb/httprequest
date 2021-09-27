import axios from "axios";
import {useState} from "react";

export default function Http() {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function handleHttpPost(post){
        try {
            const request = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
            if (request.status !== 201) {
                throw new Error('Invalid request')
            }
            else{
                console.log(request.data);
            }
        }
        catch (error){
            console.log(error.message)
        }

    }

    function handleSubmit(e){
        e.preventDefault();
        const post = {userId: userId, title: title, body: body};
        handleHttpPost(post);
        setTitle('');
        setUserId('');
        setBody('');
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-around">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-2">
                        <h4>userId</h4>
                    </div>
                    <div className="col-sm-2">
                        <input 
                            type='number'
                            className="form-control form-control-sm"
                            placeholder="Enter user ID"
                            required
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-2">
                        <h4>Title</h4>
                    </div>
                    <div className="col-sm-2">
                        <input 
                            type='text'
                            className="form-control form-control-sm"
                            placeholder="Enter title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-2">
                        <h4>Body</h4>
                    </div>
                    <div className="col-sm-2">
                        <input 
                            type='text'
                            className="form-control form-control-sm"
                            placeholder="Enter body"
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}