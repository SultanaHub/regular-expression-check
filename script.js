//Define UI elements

let inputForm = document.querySelector('#input_form');
let inputValue = document.querySelector('#input_value');


// Event listener

inputForm.addEventListener('submit', validExpression);


inputOption = 0;
    
function optionValue(e){
        
    var optV=e.target.options[e.target.selectedIndex].value;
    
    
    switch(optV){
        case '1':
            console.log('Email');
            inputOption = 1
            console.log(inputOption);
    
            break;
    
        case '2':
            console.log('Post Code');
            inputOption = 2
            console.log(inputOption);
            break;

        case '3':
            console.log('Phone Number');
      
            inputOption = 3;
            console.log(inputOption);
            break;

        default:
            console.log('Invalid Input'); 
            inputOption = 0 
            console.log(inputOption);
            break;
    }
  
  }

//   console.log('out side switch inputOption = ' + inputOption);

        
function validExpression(e){

   
    console.log('out side switch inputOption = ' + inputOption);

    if(inputValue.value === ''){
        alert('Please insert an expresion');
       
    }else{
        
        // Email Address
        let reEmail = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
      
        
        // Postal Code
        // 1203, 5270
       let rePostal = /^[0-9]{4}$/;
       
        // Bangladeshi Phone Number
        // 01717888888 +8801717888888 8801717888888
        rePhone = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
        


        if(inputOption == 1){
            if(reEmail.test(inputValue.value)){

                showMessage('This is an Email', 'successMessage');
                // console.log('email');
               
            }
            else{
                showMessage('This is not an valid Email Address..Please insert again', 'errorMessage');
                // console.log('Not Email');
               
            }

        }else if(inputOption === 2){
            if(rePostal.test(inputValue.value)){

                showMessage('This is a Postal Code', 'successMessage');
                // console.log('postal code');
                
            }else{
                showMessage('This is not a valid Postal Code..Please insert again', 'errorMessage');
                // console.log('Not postal code');
                
            }

        }else if(inputOption === 3){

            if(rePhone.test(inputValue.value)){

                showMessage('This is a Phone Number','successMessage');
                // console.log('phone number');
             
            }else{
                showMessage('This is not a valid Phone Number..Please insert again', 'errorMessage');
                // console.log('Not phone number');
           
            }

        }

    }

     inputValue.value = '';
     e.preventDefault();
}


function showMessage(message, className){


    let messageDiv = document.createElement('div'); // creating element div
    messageDiv.className = `alert ${className}`; // class name of div
    
    let msgText= document.createTextNode(message); // creating text
    messageDiv.appendChild(msgText);  //add the cerated text to element div 

    inputForm.insertAdjacentElement('afterend', messageDiv);

    setTimeout(function(){
        messageDiv.remove();
    }, 3000);
}

