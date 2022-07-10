const dateConvert = (timestamp) => {
    const date = new Date(timestamp);
    const monthAdjust = date.getMonth()+1;
    let dateString = '';

    if (date.getMonth() < 10 && date.getUTCDate() < 10) {
        dateString = `0${monthAdjust}/0${date.getUTCDate()}/${date.getFullYear()}`; 
        return dateString;

    } else if (date.getMonth() < 10 && date.getUTCDate() > 9) {
        dateString = `0${monthAdjust}/${date.getUTCDate()}/${date.getFullYear()}`;
        return dateString;

    } else if (date.getMonth() > 9 && date.getUTCDate() < 10) {
        dateString = `${monthAdjust}/0${date.getUTCDate()}/${date.getFullYear()}`;
        return dateString;

    } else {
        dateString = `${monthAdjust}/${date.getUTCDate()}/${date.getFullYear()}`;
        return dateString;
    };
}

export default dateConvert;