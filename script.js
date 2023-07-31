let numberToWords = (x) =>{
    let inputNumToArray = [];
    const wordsArray = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelev','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen','Twenty']
    const wordsArrayTens = ['Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninty']
    const wordsArrayHundred = ['Hundred','Thousand','Lakh','Crore','Arad','Kharab'];
    
    // For Value between 1-20
    let smallValue =() =>{
        
        wordsOutput= wordsArray[inputNumToArray-1];
        document.getElementById("outputArea").innerText = wordsOutput
}
    // For value from 21 and soo on
    let largeValue = () =>{
        let reverseArray = inputNumToArray.reverse()
        let lastTwoDigit
        let wordsOutput= ''
        
        // Fuctions
        // Two Digit Function
        let twoDigit=()=>{
            if (reverseArray[0]==0 && reverseArray[1]==0) {
            lastTwoDigit = "" 
            }
            if (reverseArray[0]!=0 && reverseArray[1]!=0) {
                
                if (reverseArray[1]>=2) {
                    lastTwoDigit = `${wordsArrayTens[reverseArray[1]-2]} ${wordsArray[reverseArray[0]-1]}`
                } else {
                    lastTwoDigit = wordsArray[parseInt(`${reverseArray[1]}${reverseArray[0]}`)-1]    
                }
            }
            if (reverseArray[0]==0 && reverseArray[1]!=0) {
                lastTwoDigit = `${wordsArrayTens[reverseArray[1]-2]} `
                
            }if (reverseArray[0]!==0 && reverseArray[1]==0) {
                lastTwoDigit = `${wordsArray[reverseArray[0]-1]} `
                
            }
            wordsOutput+= lastTwoDigit
            return wordsOutput 
        }


        // Three Digit Function
        let threeDigit=()=>{
            twoDigit()
            
            if (reverseArray[2]==0) {
                wordsOutput = lastTwoDigit
            }
            if(reverseArray[2]!==0){
                wordsOutput = `${wordsArray[reverseArray[2]-1]} ${wordsArrayHundred[0]} ${wordsOutput} `
            }
            
            return wordsOutput 

        }

        // Five Digit Function  
        let fiveDigit=()=>{
            let tenThousands
            

            if (reverseArray[4]>=2) {
                tenThousands = `${wordsArrayTens[reverseArray[4]-2]} ${wordsArray[reverseArray[3]-1]}`
            } else {
                tenThousands = wordsArray[parseInt(`${reverseArray[4]}${reverseArray[3]}`)-1]    
                console.log();
            }                       
            wordsOutput = `${tenThousands} ${wordsArrayHundred[1]} ${threeDigit()} `
            
            return wordsOutput 
            
        }

        let sevenDigit=()=>{
            let tenLakh
            fiveDigit()

            if (reverseArray[6]>=2) {
                tenLakh = `${wordsArrayTens[reverseArray[6]-2]} ${wordsArray[reverseArray[5]-1]}`
            } else {
                tenLakh = wordsArray[parseInt(`${reverseArray[6]}${reverseArray[5]}`)-1]    
            }                       
            wordsOutput = `${tenLakh} ${wordsArrayHundred[2]} ${wordsOutput} `
            
            return wordsOutput 
            
        }
        let nineDigit=()=>{
            let tenCrore
            sevenDigit()

            if (reverseArray[8]>=2) {
                tenCrore = `${wordsArrayTens[reverseArray[8]-2]} ${wordsArray[reverseArray[7]-1]}`
            } else {
                tenCrore = wordsArray[parseInt(`${reverseArray[8]}${reverseArray[7]}`)-1]    
            }                       
            wordsOutput = `${tenCrore} ${wordsArrayHundred[3]} ${wordsOutput} `
            
            return wordsOutput 
            
        }
        let elevenDigit=()=>{
            let tenArab
            nineDigit()

            if (reverseArray[10]>=2) {
                tenArab = `${wordsArrayTens[reverseArray[10]-2]} ${wordsArray[reverseArray[9]-1]}`
            } else {
                tenArab = wordsArray[parseInt(`${reverseArray[10]}${reverseArray[9]}`)-1]    
            }                       
            wordsOutput = `${tenArab} ${wordsArrayHundred[4]} ${wordsOutput} `
            
            return wordsOutput 
            
        }
        let thirteenDigit=()=>{
            let tenKharab
            elevenDigit()

            if (reverseArray[12]>=2) {
                tenKharab = `${wordsArrayTens[reverseArray[12]-2]} ${wordsArray[reverseArray[11]-1]}`
            } else {
                tenKharab = wordsArray[parseInt(`${reverseArray[12]}${reverseArray[11]}`)-1]    
            }                       
            wordsOutput = `${tenKharab} ${wordsArrayHundred[5]} ${wordsOutput} `
            
            return wordsOutput 
            
        }
         
        // Conditions
                // from 21 to 99
                if (inputNumToArray.length==2 ) {
                    wordsOutput=twoDigit()                   
                }
                // 100-999
                if (inputNumToArray.length==3) {
                    wordsOutput=threeDigit()                   
                    
                }
                // 1000-99999
                if (inputNumToArray.length==4 || inputNumToArray.length==5) {
                    inputNumToArray.length==4? wordsOutput = `${wordsArray[reverseArray[3]-1]} ${wordsArrayHundred[1]} ${threeDigit()} `:  fiveDigit()             
        
                }
                
                // 1,00,000-99,99,999
                if (inputNumToArray.length==6 || inputNumToArray.length==7) {
                    
                    inputNumToArray.length==6?wordsOutput = `${wordsArray[reverseArray[5]-1]} ${wordsArrayHundred[2]} ${fiveDigit()} `: sevenDigit()
                }
                //1,00,00,000 - 99,99,99,999
                if (inputNumToArray.length==8 || inputNumToArray.length==9 ) {
                    
                    inputNumToArray.length==8 ?wordsOutput = `${wordsArray[reverseArray[7]-1]} ${wordsArrayHundred[3]} ${sevenDigit()} ` : nineDigit()
                }
                // 1,00,00,00,000 - 99,99,99,99,999
                if (inputNumToArray.length==10 || inputNumToArray.length==11) {
                    inputNumToArray.length==10 ?wordsOutput = `${wordsArray[reverseArray[9]-1]} ${wordsArrayHundred[4]} ${nineDigit()} ` : elevenDigit()
                }
                // 10,00,00,00,000 - 99,99,99,99,99,999
                if (inputNumToArray.length==12 || inputNumToArray.length==13) {
                    inputNumToArray.length==12 ?wordsOutput = `${wordsArray[reverseArray[11]-1]} ${wordsArrayHundred[5]} ${elevenDigit()} ` : thirteenDigit()
                }
                if (inputNumToArray.length==14 ||inputNumToArray.length==15) {
                    if (inputNumToArray.length==14) {
                        
                        if(reverseArray[13]!==0){
                            console.log(wordsOutput);
                            wordsOutput = `${wordsArray[reverseArray[13]-1]} ${wordsArrayHundred[0]} ${thirteenDigit()} `
                            console.log(wordsOutput);
                    }  }
                   else {
                     
                     if(reverseArray[13]!==0){
                        wordsOutput = `${wordsArray[reverseArray[13]-1]} ${wordsArrayHundred[0]} ${thirteenDigit()} `
                        wordsOutput = `${wordsArray[reverseArray[14]-1]} ${wordsArrayHundred[1]} ${wordsOutput} `
                    
                    }}}
                

                    
                wordsOutput = String(wordsOutput).split(" ").map(String)
                for (let i = 0; i < wordsOutput.length; i++) {
                    var idx = wordsOutput.indexOf("undefined");

                    if (idx != -1){
                    wordsOutput.splice(idx,1);
                    
                    } 
                      
                }
                wordsOutput = String(wordsOutput).replaceAll(","," ")
                
                
                
                document.getElementById("outputArea").innerText= wordsOutput
        
    }     

        
    //Conditions for Inputs 
    
    if (x<=20) {

        inputNumToArray = x;
        smallValue()
    
    
    } else {
        
        inputNumToArray = String(x).split('').map(Number) 
        largeValue()
        
    }
 }


let convertNow=()=>{
    let num=parseInt(document.getElementById("inputForm").value)
    if (Number.isInteger(num)) {
        numberToWords(+num);
        document.getElementById("inputForm").value = ""    
    } else {
        document.getElementById("outputArea").value= "Please Enter a valid Number"
    }

}


    
