const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS to allow requests from your frontend

// Define the initial roles
let roles = ["Crewmate", "Crewmate", "Crewmate", "Spy"];
let assignedRoles = [];

app.get('/get-role', (req, res) => {
    if (roles.length === 0) {
        return res.json({ message: "All roles have been assigned." });
    }

    const randomIndex = Math.floor(Math.random() * roles.length);
    const role = roles.splice(randomIndex, 1)[0]; // Get a role and remove it from the available roles
    assignedRoles.push(role); // Keep track of assigned roles

    res.json({ role });
});

// Reset the roles for a new session
app.get('/reset', (req, res) => {
    roles = ["Crewmate", "Crewmate", "Crewmate", "Spy"];
    assignedRoles = [];
    res.json({ message: "Roles have been reset." });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
