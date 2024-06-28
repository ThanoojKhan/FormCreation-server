const User = require('../models/userModel');

const handleFormSubmission = async (req, res) => {
    const { name, email, place, college, password, confirmPassword } = req.body;

    if (!name || !email || !place || !college || !password || password !== confirmPassword) {
        return res.status(400).json({ message: 'Invalid form data' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, place, college, password });

        console.log('User:', user);

        res.status(200).json({ message: 'Registration Successful', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            res.status(200).json({ success: true, message: 'Login successful', user });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getMethod = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.query.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User found', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const patchMethod = async (req, res) => {
    const { email, ...updateData } = req.body;

    try {
        const user = await User.findOneAndUpdate({ email }, updateData, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User data updated successfully', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const putMethod = async (req, res) => {
    const { email, ...updateData } = req.body;

    try {
        const user = await User.findOneAndUpdate({ email }, updateData, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User data updated successfully', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteMethod = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User data deleted successfully', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    handleFormSubmission,
    handleLogin,
    getMethod,
    patchMethod,
    putMethod,
    deleteMethod
};
