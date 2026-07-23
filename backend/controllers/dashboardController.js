import User from "../models/User.js";
import Scheme from "../models/Scheme.js";
import Application from "../models/Application.js";

/* ========= Admin Dashboard ========= */

export const getAdminDashboard = async (req, res) => {

  try {

    const totalUsers = await User.countDocuments();

    const totalSchemes = await Scheme.countDocuments();

    const totalApplications = await Application.countDocuments();

    const approvedApplications = await Application.countDocuments({
      status: "Approved"
    });

    const rejectedApplications = await Application.countDocuments({
      status: "Rejected"
    });

    const pendingApplications = await Application.countDocuments({
      status: "Pending"
    });

    res.status(200).json({

      success: true,

      dashboard: {

        totalUsers,

        totalSchemes,

        totalApplications,

        approvedApplications,

        rejectedApplications,

        pendingApplications

      }

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
/* ========= User Dashboard ========= */

export const getUserDashboard = async (req, res) => {

  try {

    const totalApplications = await Application.countDocuments({
      user: req.user._id
    });

    const approvedApplications = await Application.countDocuments({
      user: req.user._id,
      status: "Approved"
    });

    const pendingApplications = await Application.countDocuments({
      user: req.user._id,
      status: "Pending"
    });

    const rejectedApplications = await Application.countDocuments({
      user: req.user._id,
      status: "Rejected"
    });

    const savedSchemes = req.user.savedSchemes.length;

    res.status(200).json({

      success: true,

      dashboard: {

        totalApplications,

        approvedApplications,

        pendingApplications,

        rejectedApplications,

        savedSchemes

      }

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};