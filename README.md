# async-await-callback-functions

# Callback Functions
 ## Callbacks are any functions which are passed as an argument to other functions, and then invoked from within that function.
 ## Functions are first class citizens i.e, they are also an object and can be used exactly like JS objects.
   ### Can be passed through a variable
   ### Passed as an argument to other function
   ### Function can be returned from another function

# Callback Cons
  ## Lack Readability
  ## Callback Hell - To resolve this Promises were introduced



# Promises
 ## It is an JS object that represents an eventual result of an async function
 ## Have Two Internal properties
   ### Promise Status
   ### Promise Value
 ## States of Promise
   ### Pending - during the process value will be undefined
   ### Fulfilled - action has completed successfully and the value will have the object
   ### Rejected - action has failed and the value will have the reason that why it got failed


# Async/Await
 ## Async functions always returns a promise
 ## JS will automatically changes it to a promise and status will be fullfilled i.e it will resolve the promise
 ## But if a function returns a promise, JS won't make any transformation

## Await
 ### Waits for a promise until it get settled. It doesn't matter if it is resolved or reject
