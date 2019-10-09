export const dynamicSort = (property) => {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export const getDisplayDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
}

export const filterConferencesChronologically = (property) => {
    return function (conference) {
        let today = new Date().toISOString();
        switch(property) {
            case "upcoming":
                return conference.dateEnd > today;
                break;
            case "past":
                return conference.dateEnd < today;
                break;
        }
    }
}