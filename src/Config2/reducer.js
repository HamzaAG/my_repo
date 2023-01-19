const initialState = {
    users:[ 
        { id: 1, name: "Hamza AGRAB", email: "agrab@gmail.com" }, 
        { id: 2, name: "Mohamed khalil SEBTI", email: "sebti@gmail.com" },
        { id: 3, name: "Abdessamad KRIOUITA", email: "kriouita@gmail.com" },
        { id: 4, name: "Ayoub MOUSSTAKIM", email: "mousstakim@gmail.com" },
        { id: 5, name: "Mohamed BERBOUCHI", email: "berbouchi@gmail.com" },
        { id: 6, name: "Mehdi MAGHLAL", email: "maghlal@gmail.com" },
        { id: 7, name: "Abdelfatah ARSSAOUI", email: "arssaoui@gmail.com" }
    ] 
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            const user = state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state
        case "Delete_user":
            return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer