async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) { 
    console.log(err); // oh noes, we got an error
  }
}