// controllers/incomeController.js
const Income = require('../models/income');
const {updateInvoicebyBills} =require('../controller/invoiceController')

// Create a new income record
exports.createIncome = async (req, res) => {
    try {
        console.log(req.body)
        const income = new Income(req.body);
        await income.save();
        await updateInvoicebyBills()
        res.status(201).json({ success: true, data: income });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all income records
exports.getAllIncome = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json({ success: true, data: incomes });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single income record by ID
exports.getIncomeById = async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) {
            return res.status(404).json({ success: false, error: 'Income not found' });
        }
        res.status(200).json({ success: true, data: income });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update an income record by ID
exports.updateIncomeById = async (req, res) => {
    try {
        // console.log(req.body)
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!income) {
            return res.status(404).json({ success: false, error: 'Income not found' });
        }
        res.status(200).json({ success: true, data: income });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete an income record by ID
exports.deleteIncomeById = async (req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);
        if (!income) {
            return res.status(404).json({ success: false, error: 'Income not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
