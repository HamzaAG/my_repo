import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../Config2/Action"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data=>data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:count+1,
            name:name,
            email:email
        }))
        navigate('/')
    }
    return (
        <div class="card-body">
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" />
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" />
            <button class="btn btn-success" onClick={handleClick}>Enregistrer</button>
        </form>
        </div>
    )
}
export default AddUser