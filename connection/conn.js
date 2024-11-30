const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://prabodhachalani7:chalani2001@cluster0.ykzk8.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"

)
.then(()=> {
    console.log("Connected to the database")
})
.catch(err=>{
    console.error("Error connecting to the database",err);

});