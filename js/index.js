import { makePath } from './makePath.js';
import { addDatabase } from './addDatabase.js';
import { searchDatabase } from './searchDatabase.js';
import { showList } from './showList.js';
import { selectItem } from './selectItem.js';
import { initiation } from './initiation.js';
window.addEventListener('DOMContentLoaded',function(){
    initiation(0);
    addDatabase("inp0","btn0",makePath);//add the path and string to database
    showList("inp0","list0");
    searchDatabase("inp0",makePath);
    selectItem() ;//add event listener to the list items
})