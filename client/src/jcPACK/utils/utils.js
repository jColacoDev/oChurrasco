export function validateEmail(mail){
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail))
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