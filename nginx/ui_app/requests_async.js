document.querySelector('.submit_button').addEventListener('click', (event) => {
    event.preventDefault(); 
    collectDataAndSend();
});


function collectDataAndSend() {
    const firstName = document.querySelector('input[name="first_name"]').value;
    const lastName = document.querySelector('input[name="last_name"]').value;
    const role = document.querySelector('select[name="select_role"]').value;

    sendPostRequest(firstName,lastName,role);
}

async function sendPostRequest(firstName, lastName, role) {
    
    const data = {
        first_name: firstName,
        last_name: lastName,
        role: role
    };

    try {
        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();

        fetchItems();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchItems() {
    const url = "http://localhost:8000/"; 

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayItems(data); 
    } catch (error) {
        console.error('Error:', error);
    }
}


function displayItems(items) {
    const itemList = document.getElementById("user-list"); 
    itemList.innerHTML = ""; 

    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.first_name} ${item.last_name} (${item.role})`;

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            console.log("Id uytkowniak:" + item.id)
            deleteItem(item.id);
        };

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
}




async function deleteItem(id) {
    try {
        const response = await fetch(`http://localhost:8000/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();  
        fetchItems();
    } catch (error) {
        console.error('Error:', error);
    }
}

function checkPrivacyPolicy(){
    const privacyPolicyCheckbox = document.querySelector('input[name="privacy_policy"]');
    const submitButton = document.querySelector('.submit_button');

    if (privacyPolicyCheckbox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add('active');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('active');
    }
}

document.querySelector('input[name="privacy_policy"]').addEventListener('change', checkPrivacyPolicy);


checkPrivacyPolicy();
fetchItems();