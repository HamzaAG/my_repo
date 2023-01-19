const initialState = {
    users:[ 
        { id: 1, name: "Hamza AGRAB", email: "agrab@gmail.com" }, 
        { id: 2, name: "Mohamed khalil SEBTI", email: "sebti@gmail.com" },
        { id: 3, name: "Abdessamad KRIOUITA", email: "kriouita@gmail.com" },
        { id: 4, name: "Ayoub MOUSSTAKIM", email: "mousstakim@gmail.com" },
        { id: 5, name: "Mohamed BERBOUCHI", email: "berbouchi@gmail.com" },
        { id: 6, name: "Mehdi MAGHLAL", email: "maghlal@gmail.com" },
        { id: 7, name: "Abdelfatah ARSSAOUI", email: "arssaoui@gmail.com" },
        { id: 8, name: "Ilyas AITBOUDOUAR", email: "ait_boudouar@gmail.com" },
        { id: 9, name: "Marouan MOURAD", email: "mourad@gmail.com" },
        { id: 10, name: "Adnane ABDELLAOUI", email: "abdellaoui@gmail.com" },
        { id: 11, name: "Abdellah OUACHOUCH", email: "ouachouch@gmail.com" },
        { id: 12, name: "Khalil LAKHNIKH", email: "lakhnikh@gmail.com" },
        { id: 13, name: "Hamza ANOUAR", email: "anouar@gmail.com" },
        { id: 14, name: "Oussama CHERQUAOUI", email: "cherquaoui@gmail.com" },
        { id: 15, name: "Walid OUBOUH", email: "oubouh@gmail.com" },
        { id: 16, name: "Anass AITTAMLDO", email: "ait_tamaldo@gmail.com" },
        { id: 17, name: "Zakaria BAHID", email: "bahid@gmail.com" },
        { id: 18, name: "Zakaria LAHGAZ", email: "lahgaz@gmail.com" }
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
