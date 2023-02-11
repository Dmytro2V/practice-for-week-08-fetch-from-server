export function getAllDogs() {
    // Your code here
    const url = "/dogs";
    const headers = {"Content-Type": "text/html"};
    // Use the URLSearchParams API to format your body as shown below
    const body = new URLSearchParams({
        //key: "value"
    });
    
    const options = {
        method: "GET", 
        //headers: headers,
        //body: body
    };
   return  fetch(url, options);
    
}

export function getDogNumberTwo() {
    // Your code here
    const url = "/dogs/2";
    const headers = {"Content-Type": "text/html"};
    // Use the URLSearchParams API to format your body as shown below
    const body = new URLSearchParams({
        dogId: "2"
    });
    
    const options = {
        method: "GET", 
        headers: headers,
        //body: body
    };
   return  fetch(url, options);
}

export function postNewDog() {
    // Your code here
    const url = "/dogs";
    const headers = {"Content-Type": "application/x-www-form-urlencoded"};
    // Use the URLSearchParams API to format your body as shown below
    const body = new URLSearchParams({
        name: "NewDogName-Pooh2",
        age: "99-so"
    });
    
    const options = {
        method: "POST", 
        headers: headers,
        body: body
    };
   return  fetch(url, options);
}

export function postNewDogV2(name, age) {
     // Your code here    
     const url = "/dogs";
     const headers = {"Content-Type": "application/x-www-form-urlencoded"};
     // Use the URLSearchParams API to format your body as shown below
     const body = new URLSearchParams({
         name,
         age
     });
     
     const options = {
         method: "POST", 
         headers: headers,
         body: body
     };
    return  fetch(url, options);
    
}

export function deleteDog(id) {
      // Your code here
      const url = "/dogs/" + id + "/delete";
      const headers = {        
        "AUTH": 'ckyut5wau0000jyv5bsrud90y'
      };
      
      // Use the URLSearchParams API to format your body as shown below
      const body = new URLSearchParams({
          });
      
      const options = {
          method: "POST", 
          headers: headers,
          //body: body
      };
     return  fetch(url, options);
     
}