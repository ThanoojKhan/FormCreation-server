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

const getMethod = (req, res) => {
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User found', data: user });
};

const patchMethod = (req, res) => {
    const { name, email, place, college, password } = req.body;

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user = {
        ...user,
        name: name || user.name,
        email: email || user.email,
        place: place || user.place,
        college: college || user.college,
        password: password || user.password
    };

    res.status(200).json({ message: 'User data updated successfully', data: user });
};

const putMethod = (req, res) => {
    const { name, email, place, college, password } = req.body;

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user = {
        ...user,
        name: name || user.name,
        email: email || user.email,
        place: place || user.place,
        college: college || user.college,
        password: password || user.password
    };

    res.status(200).json({ message: 'User data updated successfully', data: user });
};

const deleteMethod = (req, res) => {
    user = null;
    res.status(200).json({ message: 'DELETE Method called. User Data Deleted', user });
};


module.exports = {
    handleFormSubmission,
    handleLogin,
    getMethod,
    patchMethod,
    putMethod,
    deleteMethod
};
