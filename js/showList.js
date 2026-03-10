export function showList(inpNumber, listNumber)
{
    let inpObj = [];
    let listObj = [];
    inpObj[inpNumber] = document.getElementById('inp'+inpNumber);
    listObj[listNumber] = document.getElementById('list'+listNumber);
    inpObj[inpNumber].addEventListener('mouseover',function(event){
        listObj[listNumber].style.display = 'block';//show the list when mouseover the input
    })
}    