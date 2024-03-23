/**
 * function kinva kono statement er modde kono kico print korte chaile oita oi function kinva tatement er modde ei consol log korte hobe noyt error dibe
 */

 function add(a,b){
    const total = a+b;
     console.log(total)
     if(total >2){
        const sum =9+total;
        console.log(sum)

     }
    //  console.log(sum); .. error
     return total;
 }
//  console.log(total) ... error done
 add(2,3);