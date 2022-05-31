import users from "../database"
const updateUserService = (id,name,email) => {
    const updatedUser = {
        id,
        name,
        email,
    }

    const userIndex = users.findIndex((el)=> el.id ===  id)
    if(userIndex ===  -1){
        return "user not found"
    }
    
    users[userIndex] = {...users[userIndex], ...updatedUser}

    return users[userIndex]
}

export default updateUserService