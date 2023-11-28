const FormService = require("../services/formService");

const formController = {
  submitForm: async (req, res) => {
    try {
      const result = await FormService.submitForm(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = formController;
