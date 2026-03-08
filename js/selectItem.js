export function selectItem() {
    const liObj = document.querySelectorAll('.li');
    let selItem = "";
    liObj.forEach(li=>{
        li.addEventListener('click',function(){
            li.style.backgroundColor = 'orange';
           
            selItem = li.textContent;
            console.log(selItem);
            getSelectedItem(selItem)
            
   
        })
    })
    function getSelectedItem(selItem) {
        console.log(selItem);
        const inp1Obj=document.getElementById('inp1');
        inp1Obj.value = selItem;
    }
}