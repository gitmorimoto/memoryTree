export function addDatabase(inpId,btnId,makePath)
{
    let btnObj=document.getElementById(btnId); 
    btnObj.addEventListener('click',function(){
        const inpObj = document.getElementById(inpId);
        const str=inpObj.value;//get the string from input
           
        const path=makePath(str);//make the path
            //const path0=pathMaker(str);//make the path
        const pathStr = [path, str];
        fetch('addData.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pathStr)
            })
                .then(response =>response.text())
                .then(data => {
                    console.log(data);
            
            
            })
            .catch((reason) => {
                console.log(reason);
            })
            
    })

}






















    