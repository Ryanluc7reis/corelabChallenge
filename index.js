import * as  express from 'express' 

import userController from './src/modules/title/titleController'
import postController from './src/modules/note/noteController'
const app = express()
app.use(express.json())


app.use('/user',userController)
app.use('/post',postController)

app.listen(3000, ()=> console.log('ONLINE http://localhost:3000'))