export function searchDatabase(inpNumber,listNumber,makePath)
{
    let inpObj = [];
    let path = [];
    let liObj = [];
    inpObj[inpNumber] = document.getElementById('inp'+inpNumber);
    inpObj[inpNumber].addEventListener('keyup',function(event){
        console.log(event.key);
        if(event.key !=="") {
            const stringForSeach=inpObj[inpNumber].value;//get the string from input
            path[inpNumber]=makePath(stringForSeach);//make the path
               
            let pos = path[inpNumber].lastIndexOf("/");//find the last slash
    
            let initialSegment = path[inpNumber].substring(0,pos);//get the initial segment of the path
                
            //search the files by path and display the file content in the list
            fetch('searchFiles.php',{
                method: 'POST',
                body: initialSegment,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                liObj[listNumber] = document.querySelectorAll('.li'+listNumber);
                for(let j=0;j<liObj[listNumber].length;j++)        {
                    liObj[listNumber][j].textContent="";//clear the list before displaying the search result
                }
                let i=0;
                data.forEach(item => {
                
                    liObj[listNumber][i].textContent = item;//display the search result in the list
                    i++;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    })
}