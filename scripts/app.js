import * as http from './http.js';
import * as view from './view.js';


const url = `https://api.adviceslip.com/advice`;


async function display_results(){
   const previous = localStorage.getItem('advice');
   
   if(previous){
     //  console.log(previous);
       view.display(previous, "previous");
      }
    const json = await http.sendGETRequest(url);
    //console.log(json.slip.advice);
    const advice = json.slip.advice;
    view.display(advice, "current");

    localStorage.clear();
    localStorage.setItem('advice', advice);

}


window.start = async () => {
    
    const submit_button = document.getElementById('submit-button');
    submit_button.addEventListener('click', display_results);
}


window.addEventListener('load', start);


