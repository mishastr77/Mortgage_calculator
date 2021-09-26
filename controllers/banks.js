const { Bank } = require("../models/banks");

const createBank = async (req, res, next) => {
  try {
    const result = await Bank.create(req.body);
    res.status(201).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBanks = async (req, res, next) => {
  try {
    const result = await Bank.find({});
    res.status(200).json({
      result,
    });
  } catch (error) {
    next();
  }
};

const getBankByName = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Bank.findById(id);
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    next();
  }
};

const updateBank = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Bank.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(201).json({
      result,
    });
  } catch (error) {
    next();
  }
};

const removeBank = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Bank.findByIdAndRemove({ _id: id });
    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(204).json({
      result,
    });
  } catch (error) {
    next();
  }
};

module.exports = {
  createBank,
  getAllBanks,
  getBankByName,
  updateBank,
  removeBank,
};
