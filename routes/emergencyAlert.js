const express = require("express");
const router = express.Router();
const emergencyAlertController = require("../controllers/emergencyAlert");

// Route to create a new emergency alert
router.post("/", emergencyAlertController.createEmergencyAlert);

// Route to get all emergency alerts
router.get("/", emergencyAlertController.getEmergencyAlerts);

module.exports = router;
