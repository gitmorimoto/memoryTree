export function searchDatabase(inpId,makePath)
{
    const inpObj = document.getElementById(inpId);
    inpObj.addEventListener('keyup',function(event){
        console.log(event.key);
        if(event.key !=="") {
            const stringForSeach=inpObj.value;//get the string from input
            const path1=makePath(stringForSeach);//make the path
               
            let pos = path1.lastIndexOf("/");//find the last slash
    
            let initialSegment = path1.substring(0,pos);//get the initial segment of the path
                
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
                const liObj = document.querySelectorAll('.li');
                for(let j=0;j<liObj.length;j++)        {
                    liObj[j].textContent="";//clear the list before displaying the search result
                }
                let i=0;
                data.forEach(item => {
                
                    liObj[i].textContent = item;//display the search result in the list
                    i++;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    })
}