const express = require("express");
const { check, validationResult } = require("express-validator");
const formController = require("../controllers/formController");
const { default: rateLimit } = require("express-rate-limit");

const router = express.Router();

const validateForm = [
  check("subject").notEmpty().withMessage("Subject is required"),
  check("email").isEmail().withMessage("Invalid email address"),
  check("phone").notEmpty().withMessage("Phone is required"),
  check("message").notEmpty().withMessage("Message is required"),
];

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // allow 5 requests per minute
});

router.post("/submit-form", limiter, validateForm, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  formController.submitForm(req, res);
});

module.exports = router;
