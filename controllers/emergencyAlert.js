const EmergencyAlert = require("../models/EmergencyAlert");

exports.createEmergencyAlert = async (req, res) => {
  try {
    const { residentId, message, timestamp } = req.body;

    if (!residentId) {
      return res.status(400).json({ message: "Resident ID is required" });
    }

    // Create a new EmergencyAlert document
    const newAlert = new EmergencyAlert({
      residentId,
      message: message || "Emergency alert triggered",
      timestamp: timestamp || Date.now(),
    });

    await newAlert.save();

    res.status(201).json({
      message: "Emergency alert created successfully",
      data: newAlert,
    });
  } catch (error) {
    console.error("Error creating emergency alert:", error);
    res.status(500).json({
      message: "Failed to create emergency alert",
      error: error.message,
    });
  }
};

exports.getEmergencyAlerts = async (req, res) => {
  try {
    const alerts = await EmergencyAlert.find().populate("residentId"); // Optionally populate resident details
    res.status(200).json({ data: alerts });
  } catch (error) {
    console.error("Error fetching emergency alerts:", error);
    res.status(500).json({ message: "Failed to fetch emergency alerts" });
  }
};
