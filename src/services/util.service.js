function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function formatTime(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        if (interval > 2) return Math.floor(interval) + " years";
        else return Math.floor(interval) + " year";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (interval > 2) return Math.floor(interval) + " months";
        else return Math.floor(interval) + " month";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (interval > 2) return Math.floor(interval) + " days";
        else return Math.floor(interval) + " day";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (interval > 2) return Math.floor(interval) + " hours";
        else return Math.floor(interval) + " hour";
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (interval > 2) return Math.floor(interval) + " minutes";
        else return Math.floor(interval) + " minute";
    }
    return Math.floor(seconds) + " seconds";
}

function formatNum(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(0).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(0).replace(/\.0$/, '') + 'K';
    }
    return num;
}


export const utilService = {
    saveToStorage,
    loadFromStorage,
    formatTime,
    formatNum
}
