"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromBody = exports.findBookByPriceRange = exports.findBookByAuthorName = exports.findBookBySimpleText = exports.findBook = exports.findAllBooks = exports.addBookToDB = exports.updateBookToDB = exports.deleteBook = void 0;
var fs = __importStar(require("fs"));
var data = fs.readFileSync("./data/db.json");
var books = JSON.parse(data);
function deleteBook(id) {
    return new Promise(function (resolve, reject) {
        var array = [];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.id !== id) {
                array.push(element);
            }
        }
        var newBooks = { "books": array };
        fs.writeFileSync('./data/db.json', JSON.stringify(newBooks));
        resolve("deleted");
    });
}
exports.deleteBook = deleteBook;
function findAllBooks() {
    return new Promise(function (resolve, reject) {
        resolve(books);
    });
}
exports.findAllBooks = findAllBooks;
function findBook(id) {
    return new Promise(function (resolve, reject) {
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var ele = _a[_i];
            if (ele.id == id) {
                resolve(ele);
            }
        }
    });
}
exports.findBook = findBook;
function findBookBySimpleText(searchText) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        console.log(books);
        console.log(searchText);
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
            else if (b.author.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
            else if (b.description.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookBySimpleText = findBookBySimpleText;
function findBookByAuthorName(authorName) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.author.toLowerCase().indexOf(authorName.toLowerCase()) != -1)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookByAuthorName = findBookByAuthorName;
function findBookByPriceRange(priceArray) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        var low = priceArray[0];
        var high = priceArray[1];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.price <= high && b.price >= low)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookByPriceRange = findBookByPriceRange;
function getDataFromBody(req) {
    return new Promise(function (resolve, reject) {
        try {
            var data_1 = "";
            req.on("data", function (chunck) {
                data_1 += chunck.toString();
            });
            req.on("end", function () { return resolve(data_1); });
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.getDataFromBody = getDataFromBody;
function writeToFile(books) {
    fs.writeFileSync("./data/db.json", JSON.stringify(books), "utf8");
}
function addBookToDB(Book) {
    return new Promise(function (resolve, reject) {
        var length = books.books.length;
        var lastObject = books.books[length - 1];
        var id = lastObject.id;
        var book = __assign({ id: id + 1 }, Book);
        books.books.push(book);
        writeToFile(books);
        resolve(book);
    });
}
exports.addBookToDB = addBookToDB;
function updateBookToDB(modifiedBook, id) {
    return new Promise(function (resolve, reject) {
        var index = books.books.findIndex(function (b) { return b.id === Number(id); });
        books.books[index] = __assign({ "id": Number(id) }, modifiedBook);
        writeToFile(books);
        resolve(modifiedBook);
    });
}
exports.updateBookToDB = updateBookToDB;
