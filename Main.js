class Main{
    constructor(){
        this.tempEmployee = [];
        this.tempEmployee.push("1\tHENERY\t4992\t12\t8\tPart-Time");
        this.tempEmployee.push("2\tROSE\t7320\t40\t4\tFull-Time");
        this.tempEmployee.push("3\tNIPSEY\t17720\t40\t9\tFull-Time");
    }

    displayMenu(){

        
        let mainMenu = prompt("Main Menu \n 1. AddEmployee \n 2. RemoveEmployee \n 3. EditEmployee\n 4. DisplayEmployee", "1");
        switch(mainMenu) {
        case "1":
            this.addEmployee();
          
          break;
        case "2":
            this.removeEmployee();
          
          break;
        case "3":
            this.editEmployee();
          
          break;
        case "4":
            this.displayEmployee();
            
            break;
          
      }
  
    }

    addEmployee(){
       
        let newEmployee = prompt("Add Employee Name, age, hours/wk, payrate [separate each by a comma]" , "Adam,40,25,18");
        let temp = [];
        temp = newEmployee.split(",");
        let addTemp;
        if(temp[2] < 40)
        {
            addTemp = new PartTime(temp[0],temp[1],temp[2],temp[3]);
        }
        else{ 
            addTemp = new Manager(temp[0],temp[1],temp[3]);
        }
        addTemp.calculatePay();
        this.tempEmployee.push((this.tempEmployee.length + 1 ).toString() + "\t" + addTemp.name.toString() + "\t" + addTemp.annualSalary.toString() + "\t" + (temp[2] < 40?addTemp.hours.toString(): "40") + "\t" + addTemp.payrate.toString()+ "\t" + addTemp.type);
        alert(addTemp.name.toString() + " Added");
        this.displayEmployee();

        
        
    }
    removeEmployee(){

        let option = prompt("Remove An Employee (By ID or Name)" , "1");
        if(/\d/.test(option))
        {
        this.tempEmployee = this.tempEmployee.filter(e =>{
         let count = 0;
         for(let i =0; i < option.length; i++){
            
            if(e.charAt(i) == option[i]){
                count++;        
            }
         }

         if( count != option.length){
            return true;
         }
         else{
            return false;
         }
         
         });
         
        }
        else{
            this.tempEmployee = this.tempEmployee.filter(e =>{
                if(e.includes(option)){
                    return false;
                }
                else{
                    return true;
                }

            })

        }
        this.displayEmployee();
    }
    editEmployee(){
         let option = prompt("Enter Employee ID or Name To Edit" , "1");
         if(/\d/.test(option)){
            for(let i = 0; i < this.tempEmployee.length; i++){
                let test = [];
                test = this.tempEmployee[i].split("\t");
                if(test[0] == option){
                    let addTemp;
                    let newPay = prompt("Enter " + test[1] + "'s New Pay Rate" , "1");
                    test[4] = newPay;
                    if(test[5] == "Part-Time"){
                      
                      addTemp = new PartTime(test[1], 0, test[3], newPay);
                    
                      
                    }
                    else{
                      addTemp = new Manager(test[1], 0, newPay);
                    }
                    addTemp.calculatePay();
                    this.tempEmployee[i] = test[0] + "\t" + addTemp.name.toString() + "\t" + addTemp.annualSalary.toString() + "\t" + (test[3] < 40?addTemp.hours.toString(): "40") + "\t" + addTemp.payrate.toString()+ "\t" + addTemp.type;
                }
            }
         }
         else{
            for(let i = 0; i < this.tempEmployee.length; i++){
                let test = [];
                test = this.tempEmployee[i].split("\t");
                if(test[1] == option){
                    let addTemp;
                    let newPay = prompt("Enter " + test[1] + "'s New Pay Rate" , "1");
                    test[4] = newPay;
                    if(test[5] == "Part-Time"){
                      
                      addTemp = new PartTime(test[1], 0, test[3], newPay);
                    
                      
                    }
                    else{
                      addTemp = new Manager(test[1], 0, newPay);
                    }
                    addTemp.calculatePay();
                    this.tempEmployee[i] = test[0] + "\t" + addTemp.name.toString() + "\t" + addTemp.annualSalary.toString() + "\t" + (test[3] < 40?addTemp.hours.toString(): "40") + "\t" + addTemp.payrate.toString()+ "\t" + addTemp.type;
                }
            }

         }
         this.displayEmployee();
         
    }
    displayEmployee(){
        console.clear();
        console.log("Bob's Burger Joint");        
        console.log("ID\tName\tSalary\thrs\tpay\tFT/PT");
        

        for(let i = 0; i < this.tempEmployee.length; i++){
            console.log(this.tempEmployee[i]);
        }
        
        this.displayMenu();
    }

    

}
class Employee{

    constructor(n,a,annualSalary){
        this.name = n;
        this.age = a;
        this.annualSalary = 0;
       
    }

}
class PartTime extends Employee{
    constructor(n,a,h,p){
        super(n,a);
        this.hours = h;
        this.payrate = p;
        this.type = "Part-Time";

    }
    calculatePay() {
        this.annualSalary = ((this.payrate * this.hours)*52);
    }

}
class Manager extends Employee{

    constructor(n,a,p){
        super(n,a);
        this.payrate = p;
        this.type = "Full-Time";

    }
    calculatePay() {
        this.annualSalary = (((this.payrate * 40)*52)-1000);
    }

}

(() => {
  
    const main = new Main();
    main.displayMenu();
   
    
})();