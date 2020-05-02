/* exported alyienApi */
const aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

function UrlValidator (userInput) {
    let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res === null) {
        alert('Not a valid URL. Please, check your spelling.');
        return false;
    } else {

        //  Debug log test
        console.log(typeof userInput);        
        return userInput;    
    }    
};

export { UrlValidator };
