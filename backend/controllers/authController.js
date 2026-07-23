import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/* ========= Register User ========= */

export const registerUser = async (req, res) => {
  try {

    const { fullName, email, password, phone } = req.body;

    if (!fullName || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
      });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered."
      });
    }

    const existingPhone = await User.findOne({ phone });

    if (existingPhone) {
      return res.status(400).json({
        success: false,
        message: "Phone number already registered."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword
    });

    const token = generateToken(user._id, user.role);

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user: userResponse
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


/* ========= Login User ========= */

export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter email and password."
      });
    }

    // Password is hidden in schema, so explicitly select it
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id, user.role);

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: userResponse
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
/* ========= Get User Profile ========= */

export const getUserProfile = async (req, res) => {

  try {

    res.status(200).json({
      success: true,
      user: req.user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


/* ========= Update User Profile ========= */

export const updateUserProfile = async (req, res) => {

  try {

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is required."
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    const {
      fullName,
      phone,
      dateOfBirth,
      gender,
      category,
      state,
      district,
      address,
      occupation,
      education,
      annualIncome,
      isFarmer,
      hasDisability,
      isMinority,
      isBPL,
      preferredLanguage
    } = req.body;

    // Basic Info

    if (fullName !== undefined) user.fullName = fullName;
    if (phone !== undefined) user.phone = phone;

    // Personal Info

    if (dateOfBirth !== undefined) user.dateOfBirth = dateOfBirth;
    if (gender !== undefined) user.gender = gender;
    if (category !== undefined) user.category = category;
    if (state !== undefined) user.state = state;
    if (district !== undefined) user.district = district;
    if (address !== undefined) user.address = address;

    // Professional Info

    if (occupation !== undefined) user.occupation = occupation;
    if (education !== undefined) user.education = education;
    if (annualIncome !== undefined) user.annualIncome = annualIncome;

    // Eligibility

    if (isFarmer !== undefined) user.isFarmer = isFarmer;
    if (hasDisability !== undefined) user.hasDisability = hasDisability;
    if (isMinority !== undefined) user.isMinority = isMinority;
    if (isBPL !== undefined) user.isBPL = isBPL;

    // Preferences

    if (preferredLanguage !== undefined) {
      user.preferredLanguage = preferredLanguage;
    }

    // Profile Status

    user.profileCompleted = true;

    const updatedUser = await user.save();

    const userResponse = updatedUser.toObject();

    delete userResponse.password;

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: userResponse
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};