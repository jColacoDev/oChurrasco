export function validateEmail(mail){
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return (true)
    else 
        return (false)
}
export function validatePhone(phone){
    const pattern = /^(9[1236]\d{7}|2\d{8})$/;

    if (phone.match(pattern))
        return (true)
    else 
        return (false)
}

export function returnInitials(name){
    if(!name || name === "") return "NN"

    return name.getInitials().capitalize();
}

String.prototype.getInitials = function(glue){
    if (typeof glue == "undefined") {
        var glue = true;
    }

    var initials = this.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
    
    if (glue) {
        return initials.join('');
    }

    return  initials;
};

String.prototype.capitalize = function(){
    return this.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

export function removeAccents(str) {
    if(!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function stringToUrl(str) {
    if(!str) return "";
    return removeAccents(str.replace(/\s+/g, '-').toLowerCase())
}