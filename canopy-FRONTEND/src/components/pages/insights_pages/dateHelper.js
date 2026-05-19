// Source - https://stackoverflow.com/a/76545208
    // Posted by RobG
    // Retrieved 2026-05-19, License - CC BY-SA 4.0

export const getMonthDates = (date = new Date()) => {
    let y = date.getUTCFullYear();
    let m = date.getUTCMonth();

    let firstOfMonth = new Date(Date.UTC(y, m, 1));
    let lastOfMonth = new Date(Date.UTC(y, m + 1, 0));

    return { firstOfMonth, lastOfMonth };
};



