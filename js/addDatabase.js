export function addDatabase(path,str)
{
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
    
}