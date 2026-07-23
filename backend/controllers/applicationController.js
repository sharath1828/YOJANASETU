import Application from "../models/Application.js";
import Scheme from "../models/Scheme.js";

/* ========= Apply For Scheme ========= */

export const applyForScheme = async (req, res) => {

  try {

    const { schemeId } = req.body;

    if (!schemeId) {
      return res.status(400).json({
        success: false,
        message: "Scheme ID is required."
      });
    }

    const scheme = await Scheme.findById(schemeId);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found."
      });
    }

    const alreadyApplied = await Application.findOne({
      user: req.user._id,
      scheme: schemeId
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this scheme."
      });
    }

    const application = await Application.create({
      user: req.user._id,
      scheme: schemeId
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
/* ========= My Applications ========= */

export const getMyApplications = async (req, res) => {

  try {

    const applications = await Application.find({
      user: req.user._id
    })
      .populate(
        "scheme",
        "schemeName schemeCode category state district benefits status featured"
      )
      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      count: applications.length,

      applications

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
/* ========= Get All Applications ========= */

export const getAllApplications = async (req, res) => {

  try {

    const applications = await Application.find()

      .populate(
        "user",
        "fullName email phone"
      )

      .populate(
        "scheme",
        "schemeName category state"
      )

      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      count: applications.length,

      applications

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
/* ========= Get Application By ID ========= */

export const getApplicationById = async (req, res) => {

  try {

    const application = await Application.findById(req.params.id)

      .populate(
        "user",
        "fullName email phone"
      )

      .populate(
        "scheme",
        "schemeName schemeCode category description benefits"
      )

      .populate(
        "approvedBy",
        "fullName email"
      );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    res.status(200).json({
      success: true,
      application
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


/* ========= Approve Application ========= */

export const approveApplication = async (req, res) => {

  try {

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    application.status = "Approved";
    application.remarks = req.body.remarks || "";
    application.approvedBy = req.user._id;
    application.approvedAt = new Date();

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application approved successfully.",
      application
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


/* ========= Reject Application ========= */

export const rejectApplication = async (req, res) => {

  try {

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    application.status = "Rejected";
    application.remarks = req.body.remarks || "";
    application.approvedBy = req.user._id;
    application.approvedAt = new Date();

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application rejected successfully.",
      application
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};