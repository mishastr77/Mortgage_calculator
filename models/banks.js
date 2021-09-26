const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bankSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      default: "Ukraine",
    },
    currency: {
      type: String,
      default: "UAH",
    },
    interestRate: {
      type: Number,
      min: 0,
      max: 100,
    },
    maxLoan: {
      type: Number,
      min: 0,
    },
    minDownPayment: {
      type: Number,
      min: 0,
    },
    loanTerm: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiBankSchema = Joi.object({
  name: Joi.string().required(),
  country: Joi.string(),
  currency: Joi.string(),
  interestRate: Joi.number(),
  maxLoan: Joi.number(),
  minDownPayment: Joi.number(),
  loanTerm: Joi.number(),
});

const Bank = model("bank", bankSchema);

module.exports = {
  Bank,
  joiBankSchema,
};
