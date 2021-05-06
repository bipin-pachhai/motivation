

const renderDOM = (advice, listid) => document.getElementById(`${listid}`).innerHTML = advice;

export const display = (advice, listid) => {
    renderDOM(advice, listid);
}