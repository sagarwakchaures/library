const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017/library';
const bookConnection = {};

const bookSchema = new Schema({
    bookId : { type:String },
    bookName : { type:String },
    authorName: { type:String },
    userName : { type: String },
    issueDate : { type: Date },
    returnDate : { type: Date }
},
{
    timestamps : true
},
{
 collection : "Bookings"
});


bookConnection.getBookConnection = () =>{
   return mongoose.connect(url,{}).then((db)=>{
        return db.model('Bookings',bookSchema,'Bookings');
    }).catch((e)=>{
        let err = new Error("Unable to connect db");
        throw err;
    });
}

module.exports = bookConnection;
