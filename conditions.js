const ageOfPerson = 17
if (ageOfPerson > 18) {
    console.log("eligible to get vote");
 
} else {
    console.log("not elgible to vote");
}   
const MarriageEligiblity = 25
if (MarriageEligiblity >21 ) {
    console.log("eligible to get married");

} else{
    console.log("not eligible to married");

}
        // if you are having one condition its better to go with the IF ELSE STATMENT 



        const gender = "female"
        if(gender==="male")      { 
            console.log("male");
        } else if (gender==="female") {
            console.log("female");
        } else {
            console.log("trnasgender");
        }
                // if you are having two condition its better to go with the IF ELSEIF ELSE  STATMENT
                
        const a = 10 
        const b = 20 
        const c = 10 
        

        if (a>b && a>c) {
            console.log("a is bigger");
        }else if (b>a && b>c) {
            console.log("b is bigger");
        }
        else {
            console.log("c is bigger");
        }



        // swithch case used whem the number of conditions are more then three



        switch (gender) {
            case "male":
                console.log("Male");
                
                break;

            case "female" : 
            console.log("female");
                break;
        
           

        
            default:
                console.log(Transgender);
                break;
        }
        const daynumber = 5 
        switch (daynumber) {
            case 1:
                console.log("monday");
                
                break;
            case 2:
                console.log("tuesday");
                
                break;
            case 3:
                    console.log("wed");
                    
                    break;
             case 4:
                        console.log("thursday");
                        
                        break;  
            case 5:
                            console.log("friday");
                            
                            break;
            case 6:
                                console.log("saturdy");
                                
                                break;    
             case 7:
                                    console.log("sunday");
                                    
                                    break;                                
            default:
                console.log("default");
                break;
        }

        






