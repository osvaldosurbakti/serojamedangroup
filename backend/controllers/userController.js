// controllers/userController.js
import User from '../models/User.js';

export const createAdmin = async (req, res) => {
  const { name, username, email, password } = req.body;
  
  try {
    const newAdmin = new User({
      name,
      username,
      email,
      password, // Make sure to hash the password before saving!
      role: 'admin',
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ message: 'Failed to create admin' });
  }
};
