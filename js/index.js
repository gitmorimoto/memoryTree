import { makePath } from './makePath.js';
import { addDatabase } from './addDatabase.js';
import { searchDatabase } from './searchDatabase.js';
window.addEventListener('DOMContentLoaded',function(){
    const inp0Obj=document.getElementById('inp0');
    const btn0Obj=document.getElementById('btn0');
    btn0Obj.addEventListener('click',function(){
        const str=inp0Obj.value;//get the string from input
        const path0=makePath(str);//make the path
        
        addDatabase(path0,str);//add the path and string to database
        
    })

    inp0Obj.addEventListener('keyup',function(event){
        console.log(event.key);
        if(event.key !=="") {
            const stringForSeach=inp0Obj.value;//get the string from input
            const path1=makePath(stringForSeach);//make the path
           
            let pos = path1.lastIndexOf("/");//find the last slash

            let initialSegment = path1.substring(0,pos);//get the initial segment of the path
            
            searchDatabase(initialSegment);//search the database with the initial segment of the path
            //return;
        }
    })
})