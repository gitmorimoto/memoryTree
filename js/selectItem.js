export function selectItem(elemNumber) {
    const liObj = [];

    liObj[elemNumber] = document.querySelectorAll('.li'+elemNumber);
    let selItem = "";
    liObj.forEach(li=>{
        li.addEventListener('click',function(){
            li.style.backgroundColor = 'orange';
           
            selItem = li.textContent;
            console.log(selItem);
            getSelectedItem(selItem,elemNumber);
            
   
        })
    })
    function getSelectedItem(selItem,elemNumber) {
        console.log(selItem);
        let inpObj = [];
        inpObj[elemNumber]=document.getElementById('inp'+elemNumber);
        inpObj[elemNumber].value = selItem;
    }
}