const urlValidator = (userInput) => {
    let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res === null) {
        alert('Not a valid URL. Please check your spelling.');
        return false;
    } else 
        return true;    
}

export { urlValidator }
