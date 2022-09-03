//Q.1: Write one example explaining how you can write a callback function ?

// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);

//Q.2: Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

//Explain callback hell
// 1
// 2
// 3
// 4
// 5
// 6
// 7

    let production = () =>{
	        console.log("Numbers")
	            setTimeout(()=>{
	              console.log("1")//prints after 1 sec
	                setTimeout(()=>{
	                 console.log("2")//prints after 2 secs
	                  setTimeout(()=>{
	                   console.log("3")//prints after 3 secs
	                     setTimeout(()=>{
	                      console.log("4")//prints after 4 secs
	                        setTimeout(()=>{
	                         console.log("5")//prints after 5 secs
	                          setTimeout(()=>{
	                           console.log("6")//prints after 6 secs
	                            setTimeout(()=>{
	                             console.log("7")//prints after 7 secs
                          	},7000)//sets timeout interval as 7 secs
	                    },6000)//sets timeout interval as 6 secs
	                },5000)//sets timeout interval as 5 secs
	             },4000)//sets timeout interval as 4 secs
	         },3000)//sets timeout interval as 3 secs
	     },2000)//sets timeout interval as 2 secs
	 },1000)//sets timeout interval as 1 sec
	};
	
	production()
	



//Q.3: Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers 
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let printNumber = ( time, number ) => {
	return new Promise( ( resolve, reject )=>{
	if( number ){
	setTimeout(()=>{
	resolve( num() )
	}, time)
	}
	else{
	reject( console.log("No number") )
	}
	})
	}
	printNumber( 0, ()=>console.log("Numbers"))//prints Numbers at 0th sec.
	.then(()=>{
	return printNumber(1000,()=>console.log('1'))//prints 1 after 1 secs
	})
	.then(()=>{
	return printNumber(2000,()=>console.log('2'))//prints 2 after 2 secs and so for others
	})
	.then(()=>{
	return printNumber(3000,()=>console.log('3'))
	})
	.then(()=>{
	return printNumber(4000,()=>console.log('4'))
	})
	.then(()=>{
	return printNumber(5000,()=>console.log('5'))
	})
	
	.then(()=>{
	return printNumber(6000,()=>console.log('6'))
	})
	.then(()=>{
	return printNumber(7000,()=>console.log('7'))
	})
	

//Q.4: Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

let emp = (prom) => {
    return new Promise((resolve, reject) => {
        if(prom === "yes") {
            resolve();
        }
        else {
            reject();
        }
    })
}

prom = "yes";
emp(str).then(() => {
    console.log("Promise Resolved");
}).catch(() => {
    console.log("Promise Rejected");
})




//Q.5: Create examples to explain callback function.

function Display(some) {
	console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
  }
  
  myCalculator(7, 7, Display);

  // Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished.
  

//Q.6: Create examples to explain callback hell function.

//Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// returning results like other functions, takes time to produce the result.
const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();



//Q.7: Create examples to explain promises function

const getId = new Promise((resolve, reject) => { //prodecer // resolve and reject are executor function
    setTimeout(()=> {
        let id= [1,2,3,4,5];
        //resolved(id);
        reject("error in fetching details");
    }, 3000);//timeout period 3sec

});

getId                 
.then((data)=>{
    console.log("the data resolved",data);
})
.catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log("end of promise");
});

//Q.8: Create examples to explain async await function

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

async function tryingPromises(){//continued with line 2.
    console.log("I am inside the function using async/await");//3.
    const response = await fetch("https://api.github.com/users");//4.th line initiated but not finished//i will continue from here later, because I am asked to wait but I have other options to execute other lines also.
    console.log("before the response is fetched");
    const users = await response.json();
    console.log("Users resolved");

    return users;
}

console.log("Before calling the function");//1.
let data = tryingPromises();//2./ new Promise(resolve,reject)
console.log("After calling the function");//this was the 4th line that got completed
console.log("data received",data);
data.then((res)=>{
    console.log(res);
})
// data.catch((err)=>{
//     console.log(err);
// })
console.log("End Of Code");

//Q.9: Create examples to explain promise.all function

const getId1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let id = [1, 2, 3, 4, 5];
		resolve(id);
		reject('Error in fetching the details'); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
	}, 2000);
});

const getEmpDetails = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(data) => {
				let empDetails = {
					fName: 'Ravi',
					lName: 'Patel',
					age: 24,
				};
				resolve(
					`The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
				);
			},
			2000,
			data
		);
	});
};


//..........................

getId1
	.then((id) => {
		console.log('The id is', id);
		getEmpDetails(id[2])
			.then((data) => {
				console.log('the data is', data);
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	})
    .finally(()=>{
    console.log("End of promises");
})
