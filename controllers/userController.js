let user = null;

const handleFormSubmission = (req, res) => {
    const { name, email, place, college, password, confirmPassword } = req.body;

    if (!name || !email || !place || !college || !password || password !== confirmPassword) {
        return res.status(400).json({ message: 'Invalid form data' });
    }

    if (user && user.email === email) {
        return res.status(400).json({ message: 'User already exists' });
    }

    user = { name, email, place, college, password };

    console.log('User:', user);

    res.status(200).json({ message: 'Registration Succefull', data: user });
};


const handleLogin = (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);

    if (user && user.email === email && user.password === password) {
        res.status(200).json({ success: true, message: 'Login successful', user });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
};

module.exports = {
    handleFormSubmission,
    handleLogin
};
