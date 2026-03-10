import { makePath } from './makePath.js';
import { addDatabase } from './addDatabase.js';
import { searchDatabase } from './searchDatabase.js';
import { showList } from './showList.js';
import { selectItem } from './selectItem.js';
import { initiation } from './initiation.js';
window.addEventListener('DOMContentLoaded',function(){
    initiation(0);
    initiation(1);
    addDatabase("inp0","btn0",makePath);//add the path and string to database
    showList(0,0);
    showList(1,1);
    searchDatabase(0,0,makePath);
    searchDatabase(1,1,makePath);
    selectItem(0) ;//add event listener to the list items
    selectItem(1) ;//add event listener to the list items
})