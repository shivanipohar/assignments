"use strict";
class Bookss {
    constructor(id, title, author, price, rating) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}
class bookManager {
    constructor() {
        this.bookData = [];
    }
    displayAll(bookData) {
        let template1 = `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`;
        document.getElementById("tbdy").innerHTML = template1;
        for (let i = 0; i < bookData.length; i++) {
            if (bookData[i] != null) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let template = `
                    <tr>
                        <td>${id1}</td>
                        <td>${title1}</td>
                        <td>${author1}</td>
                        <td>${price1}</td>
                        <td>${rating1}</td>
                        <td><button onclick="deleteall(${id1})">delete</button> </td>
                    </tr>`;
                document.getElementById("tbdy").innerHTML += template;
            }
        }
    }
    searchById(bookData, searchValue) {
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].id) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let template = `
            <tr>
                <td>${id1}</td>
                <td>${title1}</td>
                <td>${author1}</td>
                <td>${price1}</td>
                <td>${rating1}</td>
                
                <td><button onclick="deleteall(${id1})">delete</button> </td>
            </tr>`;
                document.getElementById("tbdy").innerHTML = template;
            }
        }
    }
    //     let resultantbook:Bookss[]=[];
    //     for (let i = 0; bookData.length; i++) {
    //         if (searchValue == bookData[i].id) {
    //             console.log(i);
    //             resultantbook[i]=bookData[i];
    //           }
    //     }
    //     display(resultantbook) ;
    // }
    // getId(bookData:Bookss[],searchValue:number):Bookss[]
    // {
    // var serBooks:Bookss[]=[];
    // for(let i=0;i<bookData.length;i++)
    // {
    //     if(bookData[i].id==searchValue){
    //         serBooks.push(bookData[i])
    //     }
    // }
    // return serBooks;
    // }
    searchByTitle(bookData, searchValue) {
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].title) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let template = `
            <tr>
                <td>${id1}</td>
                <td>${title1}</td>
                <td>${author1}</td>
                <td>${price1}</td>
                <td>${rating1}</td>
                
                <td><button onclick="deleteall(${id1})">delete</button> </td>
            </tr>`;
                document.getElementById("tbdy").innerHTML = template;
            }
        }
    }
    searchByAuthor(bookData, searchValue) {
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].author) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let template = `
        <tr>
            <td>${id1}</td>
            <td>${title1}</td>
            <td>${author1}</td>
            <td>${price1}</td>
            <td>${rating1}</td>
            
            <td><button onclick="deleteall(${id1})">delete</button> </td>
        </tr>`;
                document.getElementById("tbdy").innerHTML = template;
            }
        }
    }
    searchByRating(bookData, searchValue) {
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].rating) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1 = bookData[i].price;
                let rating1 = bookData[i].rating;
                let template = `
        <tr>
            <td>${id1}</td>
            <td>${title1}</td>
            <td>${author1}</td>
            <td>${price1}</td>
            <td>${rating1}</td>
            <td><button onclick="deleteall(${id1})">delete</button> </td>
        </tr>`;
                document.getElementById("tbdy").innerHTML = template;
            }
        }
    }
}
//let bookData:Bookss[] = [];
// let bookData: Book[]
//     bookData.push(new Book("1", "The Accursed God", "Vivek Dutta Mishra", 4.5)),
//     bookData.push(new Book("2", "I Too Had A Love Story", "Ravinder Singh", 5.0)),
//     bookData.push(new Book("3", "Girl in Room 105", "Chetan Bhagat", 4.1)),
//     bookData.push(new Book("4", "Revolution 2020", "Chetan Bhagat", 4.6)),
//     bookData.push(new Book("5", "Arthashastra", "Kautilya", 4.0)),
//     bookData.push(new Book("6", "To Kill a MockingBird", "Harper Lee", 4.3)),
//     bookData.push(new Book("7", "Laxmi Sehgal", "A Revoloutionary Life", 3.6));
let bookData = [
    { id: 1, title: "The Accursed God", author: "Vivek Dutta Mishra", price: 34, rating: 3 },
    { id: 2, title: "The Guide", author: "R.K.Narayan", price: 100, rating: 6 },
    { id: 3, title: "The discovery of India", author: "Jawaharlal Nehru", price: 90, rating: 4 },
    { id: 4, title: "Cheque book", author: "Vasdev Mohi", price: 67, rating: 4 },
    { id: 5, title: "Arthashastra", author: "Kautilya", price: 105, rating: 2 },
    { id: 6, title: "Bridgital Nation", author: "Shri N Chandrasekaran", price: 200, rating: 3 }
];
let manager = new bookManager;
manager.displayAll(getlocalStorageData());
function option() {
    var selectedvalues = document.getElementById("searchOptions").value;
    return selectedvalues;
}
function searchByDetails() {
    var optionvalue = option();
    let searchValue = document.getElementById('searchid').value;
    let local = getlocalStorageData();
    switch (optionvalue) {
        case "id":
            console.log("search by id");
            manager.searchById(local, searchValue);
            break;
        case "title":
            manager.searchByTitle(local, searchValue);
            break;
        case "author":
            manager.searchByAuthor(local, searchValue);
            break;
        case "rating":
            manager.searchByRating(local, searchValue);
            break;
    }
}
function showall() {
    var count = 0;
    if (count == 0) {
        manager.displayAll(bookData);
        count++;
    }
}
function addbook() {
    alert(`added successful`);
    let newid = document.getElementById("newid").value;
    let newtitle = document.getElementById("newtitle").value;
    let newauthor = document.getElementById("newauthor").value;
    let newprice = document.getElementById("newprice").value;
    let newrating = document.getElementById("newrating").value;
    var booklist = getlocalStorageData();
    booklist.push({ id: newid, title: newtitle, author: newauthor, price: newprice, rating: newrating });
    // console.log(newid);
    // console.log(bookData);
    updatelocalStroage(booklist);
}
function deleteall(id1) {
    let localbooks = getlocalStorageData();
    for (let i = 0; i < localbooks.length; i++) {
        if (localbooks[i] != null) {
            if (id1 == localbooks[i].id) {
                localbooks[i] = null;
            }
        }
    }
    updatelocalStroage(localbooks);
}
function updatelocalStroage(bookData) {
    console.log("update local storage");
    localStorage.setItem('item', JSON.stringify(bookData));
}
function getlocalStorageData() {
    return (JSON.parse(localStorage.getItem("item")));
}
function display(bookData) {
    manager.displayAll(bookData);
}
function show1() {
    manager.displayAll(getlocalStorageData());
}
