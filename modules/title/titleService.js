let users = []

const getUserByEmail = (searchEmail) => 
users.find((obj) => obj.email === searchEmail)


export const title = (data) => {
  if (getUserByEmail(data.email)) throw new Error('email_existente') 
    users.push(data)
    return true
  }
