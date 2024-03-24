//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const age = parseInt(document.getElementById("age").value);
  const name = document.getElementById("name").value;
  
  if (!age || !name) {
    alert("Please fill in all fields.");
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });
  
  promise.then((name) => {
    alert(`Welcome, ${name}. You can vote.`);
  }).catch((name) => {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });
});
