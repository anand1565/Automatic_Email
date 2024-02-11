document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const requestData = {
        name: formData.get("name"),
        email: formData.get("email")
    };

    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (response.ok) {
                alert("Subscription successful!");
            } else {
                alert("Error subscribing, please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error subscribing, please try again.");
        });
});
