/*
    interact with model & writing the bussiness logic
*/
const bookingModel = require('../model/bookingModel');
const bookingService = {};

bookingService.fetchBooking = () =>{
    return bookingModel.fetchBooking().then((res)=>{
        return res;
    });
}

/*
issue the the book to the person
*/
bookingService.issueBook = (bookingObj) =>{
    if (bookingObj.bookId === undefined ){
        throw new Error("booking id is required !!!!");
    }
    let bookId = bookingObj.bookId;
    delete bookingObj.bookId;
    return bookingModel.issueBook(bookId,bookingObj).then((res)=>{
        return res;
    });
}

/*
return the the book to library
*/
bookingService.returnBook = (bookingObj) =>{
    if (bookingObj.bookId === undefined ){
        throw new Error("booking id is required !!!!");
    }
    let bookId = bookingObj.bookId;
    delete bookingObj.bookId;
    return bookingModel.returnBook(bookId,bookingObj).then((res)=>{
        return res;
    });
}

/*
 all the books issued by the library in the last 30 days
*/
bookingService.getRecordOfLastOneMonthByIssueDate = () =>{
   return bookingModel.getRecordOfLastOneMonthByIssueDate().then((res)=>{
        return res;
    });
}

/*
to setup the book collection
*/
bookingService.setupBookDb = () =>{
    return bookingModel.setupBookDb().then((res)=>{
        return res;
    });
 }

module.exports = bookingService;