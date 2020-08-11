const bookConnection = require('../utilities//bookConnection');
const bookingModel = {};
/*
fetch all the book of library
*/
bookingModel.fetchBooking = () =>{
    return bookConnection.getBookConnection().then((bookModel)=>{
        return bookModel.find().then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
issue the the book to the person
*/
bookingModel.issueBook = (bookId,bookingObj) =>{ 
    return bookConnection.getBookConnection().then((bookModel)=>{
        return bookModel.updateOne({ bookId:bookId },{ $set: bookingObj }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
return the the book to library
*/
bookingModel.returnBook = (bookId,bookingObj) => {
    return bookConnection.getBookConnection().then((bookModel)=>{
        return bookModel.updateOne({ bookId:bookId },{ $set: bookingObj }).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
 all the books issued by the library in the last 30 days
*/
bookingModel.getRecordOfLastOneMonthByIssueDate = () =>{
    return bookConnection.getBookConnection().then((bookModel)=>{
        return bookModel.find({"issueDate" : { $gte: new Date((new Date().getTime() - (30 * 24 * 60 * 60 * 1000)))}}).then((res)=>{
            return res;
        }).catch((e)=>{
            let err = new Error(e.message);
            throw err;
        });
    });
}

/*
created the obj for defualt data insertion(db setup)
*/
bookingModel.setupBookDb = () =>{
    let bookObj = [
        {
            bookId : "B001",
            bookName : "Computer Network",
            authorName: "Behrouz A. Forouzan"
        },{
            bookId : "B002",
            bookName : "Software Engg Part",
            authorName: "Jim Kurose"
        },{
            bookId : "B003",
            bookName : "OS",
            authorName: "Sudarshan, S"
        },
        {
            bookId : "B004",
            bookName : "M3",
            authorName: "Rajaraman"
        },
        {
            bookId : "B005",
            bookName : "M2",
            authorName: "Murthy"
        }
    ];
    return bookConnection.getBookConnection().then((bookModel)=>{
        return bookModel.deleteMany().then(()=>{
            return bookModel.insertMany(bookObj).then((res)=>{
                return res;
            }).catch((e)=>{
                let err = new Error(e.message);
                throw err;
            });
        });
    });
}

module.exports = bookingModel;