const handleFormSubmission = (req, res) => {
    const { name, email, place, college, password, confirmPassword } = req.body;

    console.log(req.body);

    res.status(200).json({ message: 'Form data received successfully on the server side', data: req.body });
};

module.exports = {
    handleFormSubmission
};
