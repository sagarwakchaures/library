const express = require('express');
const router = express.Router();
const bookingService = require('../service/bookingService');

/*
    retrieve all the books
*/
router.get('/retrieve',(req,res,next)=>{
    bookingService.fetchBooking().then((response)=>{
        res.json({'bookData':response});
    }).catch((err)=>{
        next(err);
    });
});

/*
    issue the book
*/
router.post('/issueBook',(req,res,next)=>{
    let bookingObj = req.body;
    bookingService.issueBook(bookingObj).then((response)=>{
        res.json({'bookData':response});
    }).catch((err)=>{
        next(err);
    });
});

/*
    return the book
*/
router.post('/returnBook',(req,res,next)=>{
    let bookingObj = req.body;
    bookingService.returnBook(bookingObj).then((response)=>{
        res.json({'bookData':response});
    }).catch((err)=>{
        next(err);
    });
});

/*
    return the getRecordOfLastOneMonthByIssueDate
*/
router.get('/getRecordOfLastOneMonthByIssueDate',(req,res,next)=>{
    bookingService.getRecordOfLastOneMonthByIssueDate().then((response)=>{
        res.json({'bookData':response});
    }).catch((err)=>{
        next(err);
    });
});

/*
  run this api to setup the book collection 
*/
router.get('/setupBookDb',(req,res,next)=>{
    bookingService.setupBookDb().then((response)=>{
        res.json({'data':"data is inserted successfully...!!!"});
    }).catch((err)=>{
        next(err);
    });
});

module.exports = router;