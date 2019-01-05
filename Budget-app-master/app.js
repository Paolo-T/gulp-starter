/////////////////////////
//UIController
/////////////////////////
const UIController = (function() {

    // DOM strings collection
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    }


    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        }

    };

}());


/////////////////////////
//budget data Controller
/////////////////////////
const budgetController = (function() {

    //constructor for expenses
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //constructor for incomes
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            let newItem;
            newItem = snew Expense(ID, des, value);
        }
    }


}());




/////////////////////////
//General app controller
/////////////////////////
const appController = (function(UIctrl, budgetCtrl) {

    // importing DOMStrings from UIController
    let DOMStringsImport = UIController.getDOMStrings();

    function setupEventListeners() {
        document.querySelector(DOMStringsImport.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keycode === 13 | event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    function ctrlAddItem() {

        // 1. Get the field input Data
        let input = UIController.getInput();
        console.log({input});

        // 2. Add the Item to the budget controller

        // 3. Add the Item to the UI

        // 4. Calculate the budget

        // 5. Display the budget to the UI
;
    };


    return {
        init: function() {
            console.log('Application has started!!');
            setupEventListeners();
        }
    }

}(UIController, budgetController));

appController.init();