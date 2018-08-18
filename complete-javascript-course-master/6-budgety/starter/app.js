/*
- Divided the code into three private Modules using Instantly invoked     functions.
  1. budgetController--> Controls 
  2. UIController-----> Controls elements of the UI
  3. controller ------> General App controller. Can access other modules     by accepting them as function parameters.

  
*/





//BUDGET CONTROLLER
var budgetController = (function () {
 
    //some code

})();



//UI CONTROLLER
var UIController = (function() {
    
    // Storing all strings in an object
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    //Getting all the inputs and store into an Object + returning to make available to other modules
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };     
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    // var setupEventListeners = function () {
    //     // using string collection object in local module
    //     var importDOMStrings = UIController.getDOMstrings();
    // };
    
    //adding event listener to the button
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
   
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI
    
        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    // Displaying input on pressing the "Enter"
    document.addEventListener('keypress', function(event) {
        if (event.keycode === 13 || event.which ===13) {
            ctrlAddItem();
        }
    });


})(budgetController, UIController);