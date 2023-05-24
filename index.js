function submitData() {
  const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      let newContent = document.createElement("h1");
      newContent.innerHTML = object.id;
      document.body.appendChild(newContent);
    })
    .catch(function (error) {
      alert("Unauthorized Access");
      let newContent = document.createElement("h1");
      newContent.innerHTML = error.message;
      document.body.appendChild(newContent);
    });
}
