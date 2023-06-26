// controllers/tokenController.js
const Token = require("../models/Token");

exports.generateToken = async (req, res) => {
  try {
    const { amount, meter_number } = req.body;

    // Perform validations on amount and meter_number

    const token_value_days = Math.floor(amount / 100);

    if (token_value_days === 0 || token_value_days > 365 * 5) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const token = generateTokenValue();
    const newToken = await Token.create({
      meter_number,
      token,
      token_status: "NEW",
      token_value_days,
      amount,
    });

    return res.status(200).json(newToken);
  } catch (error) {
    console.error("Error generating token:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.validateToken = async (req, res) => {
  try {
    const { token } = req.body;

    // Perform validations on token

    const foundToken = await Token.findOne({ where: { token } });

    if (!foundToken) {
      return res.status(404).json({ message: "Token not found" });
    }

    return res.status(200).json(foundToken);
  } catch (error) {
    console.error("Error validating token:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTokensByMeterNumber = async (req, res) => {
  try {
    const { meter_number } = req.params;

    // Perform validations on meter_number

    const tokens = await Token.findAll({ where: { meter_number } });

    return res.status(200).json(tokens);
  } catch (error) {
    console.error("Error getting tokens:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Helper function to generate an 8-digit token
function generateTokenValue() {
  // Generate the token value based on your specific requirements
  // Implement your logic here to generate a random or unique token
  return "12345678";
}
