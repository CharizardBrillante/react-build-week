export const timePassed = (ms) => {
    let min = Math.floor(ms / (1000 * 60));
    let hours = Math.floor(min / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    if (years > 0) {return `${years} years ago`}
    else if (months > 0) {return `${months} months ago`}
    else if (days > 0) {return `${days} days ago`}
    else if (hours > 0) {return `${hours} hours ago`}
    else if (min > 0) {return `${min} min ago`}
    else {return 'now'}
}

export const datesDiff = (start, end = new Date().getTime()) => end - Date.parse(start);