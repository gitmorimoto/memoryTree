export function searchDatabase(path)
{
    //search the files by path and display the file content in the list
    fetch('searchFiles.php',{
        method: 'POST',
        body: path,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const liObj = document.querySelectorAll('.li');
        for(let j=0;j<liObj.length;j++)        {
            liObj[j].textContent="";//clear the list before displaying the search result
        }
        let i=0;
        data.forEach(item => {
            console.log(item);
            liObj[i].textContent = item;//display the search result in the list
            i++;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}