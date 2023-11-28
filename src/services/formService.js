const Form = require("../models/form");

const formService = {
  submitForm: async (formData) => {
    try {
      const newForm = new Form(formData);
      const savedForm = await newForm.save();
      return savedForm;
    } catch (error) {
      console.error("Error saving form:", error);
      throw new Error("Error saving form");
    }
  },
};

module.exports = formService;
