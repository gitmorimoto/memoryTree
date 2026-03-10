export function selectItem(elemNumber) {
    const liObj = [];
    console.log("selectItem function is called for elemNumber: "+elemNumber);
    liObj[elemNumber] = document.querySelectorAll('.li'+elemNumber);
    let selItem = "";
    console.log(liObj[elemNumber].length);
    liObj[elemNumber].forEach(li=>{
        li.addEventListener('click',function(){
            li.style.backgroundColor = 'orange';
           
            selItem = li.textContent;
            console.log(selItem);
            getSelectedItem(selItem,elemNumber);
            
   
        })
    })
    function getSelectedItem(selItem,elemNumber) {
        console.log(selItem);
        let outObj = [];
        let inpObj = [];
        outObj[elemNumber]=document.getElementById('out'+elemNumber);
        outObj[elemNumber].textContent = selItem;
    }
}