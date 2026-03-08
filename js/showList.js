export function showList(inpId, listId)
{
    let inpObj = document.getElementById(inpId);
    let listObj = document.getElementById(listId);
    inpObj.addEventListener('mouseover',function(event){
        listObj.style.display = 'block';//show the list when mouseover the input
    })
}    