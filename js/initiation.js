export function initiation(elemNumber)
{
    let listObj = [];
    const inpObj=document.getElementById('inp'+elemNumber);
    const btObj=document.getElementById('btn'+elemNumber);
    listObj[elemNumber]=document.getElementById('list'+elemNumber);
    listObj[elemNumber].style.display = 'none';//hide the list at the beginning
}