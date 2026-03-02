/// Switch__ With_ Real_ Example
// APi response code 200 ok
//Response code - 200, 201, 205, 400, 404, 500.........etc

let response = 404;
switch (response) {

    case 200:
        console.log("200 Ok");
        break;
    case 400:
        console.log("400 Bad request");
        break;
    case 404:
        console.log("404 Not found");
        break;
    case 505:
        console.log("505 not supported");
        break;
    default:
        console.log("no response found");

}
