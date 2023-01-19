import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteUserAction} from '../Config2/Action'
function UserList() {
    const users = useSelector((data)=>data.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUserAction(id))
    }
    return (
        <div className="card-body">
            <p>
                <Link to="/add-user">
                    <button class="btn btn-success btn-sm">Add user</button>
                </Link>
            </p>
            <br/>
            <div class="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}>
                                        <button class="btn btn-primary btn-sm">Edit</button>
                                    </Link>
                                    <button class="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default UserList