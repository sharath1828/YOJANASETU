import Scheme from "../models/Scheme.js";

/* ========= Create Scheme ========= */

export const createScheme = async (req, res) => {

  try {

    const {
      schemeName,
      schemeCode,
      description,
      category,
      state,
      district,
      minAge,
      maxAge,
      gender,
      categoryEligibility,
      incomeLimit,
      occupation,
      isFarmer,
      hasDisability,
      isMinority,
      isBPL,
      benefits,
      requiredDocuments,
      applicationProcess,
      officialWebsite,
      applicationDeadline,
      featured,
      status
    } = req.body;

    if (!schemeName || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
      });
    }

    if (schemeCode) {

      const existingScheme = await Scheme.findOne({ schemeCode });

      if (existingScheme) {
        return res.status(400).json({
          success: false,
          message: "Scheme code already exists."
        });
      }

    }

    const scheme = await Scheme.create({

      schemeName,
      schemeCode,
      description,
      category,
      state,
      district,
      minAge,
      maxAge,
      gender,
      categoryEligibility,
      incomeLimit,
      occupation,
      isFarmer,
      hasDisability,
      isMinority,
      isBPL,
      benefits,
      requiredDocuments,
      applicationProcess,
      officialWebsite,
      applicationDeadline,
      featured,
      status,
      createdBy: req.user._id

    });

    res.status(201).json({

      success: true,
      message: "Scheme created successfully.",
      scheme

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};


/* ========= Get All Schemes ========= */

export const getAllSchemes = async (req, res) => {

  try {

    const schemes = await Scheme.find()
      .populate("createdBy", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      count: schemes.length,
      schemes

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};


/* ========= Get Scheme By ID ========= */

export const getSchemeById = async (req, res) => {

  try {

    const scheme = await Scheme.findById(req.params.id)
      .populate("createdBy", "fullName email");

    if (!scheme) {

      return res.status(404).json({

        success: false,
        message: "Scheme not found."

      });

    }

    res.status(200).json({

      success: true,
      scheme

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
/* ========= Update Scheme ========= */

export const updateScheme = async (req, res) => {

  try {

    const scheme = await Scheme.findById(req.params.id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found."
      });
    }

    const {
      schemeName,
      schemeCode,
      description,
      category,
      state,
      district,
      minAge,
      maxAge,
      gender,
      categoryEligibility,
      incomeLimit,
      occupation,
      isFarmer,
      hasDisability,
      isMinority,
      isBPL,
      benefits,
      requiredDocuments,
      applicationProcess,
      officialWebsite,
      applicationDeadline,
      featured,
      status
    } = req.body;

    if (schemeCode && schemeCode !== scheme.schemeCode) {

      const existingScheme = await Scheme.findOne({ schemeCode });

      if (existingScheme) {
        return res.status(400).json({
          success: false,
          message: "Scheme code already exists."
        });
      }

    }

    if (schemeName !== undefined) scheme.schemeName = schemeName;
    if (schemeCode !== undefined) scheme.schemeCode = schemeCode;
    if (description !== undefined) scheme.description = description;
    if (category !== undefined) scheme.category = category;
    if (state !== undefined) scheme.state = state;
    if (district !== undefined) scheme.district = district;
    if (minAge !== undefined) scheme.minAge = minAge;
    if (maxAge !== undefined) scheme.maxAge = maxAge;
    if (gender !== undefined) scheme.gender = gender;
    if (categoryEligibility !== undefined) scheme.categoryEligibility = categoryEligibility;
    if (incomeLimit !== undefined) scheme.incomeLimit = incomeLimit;
    if (occupation !== undefined) scheme.occupation = occupation;
    if (isFarmer !== undefined) scheme.isFarmer = isFarmer;
    if (hasDisability !== undefined) scheme.hasDisability = hasDisability;
    if (isMinority !== undefined) scheme.isMinority = isMinority;
    if (isBPL !== undefined) scheme.isBPL = isBPL;
    if (benefits !== undefined) scheme.benefits = benefits;
    if (requiredDocuments !== undefined) scheme.requiredDocuments = requiredDocuments;
    if (applicationProcess !== undefined) scheme.applicationProcess = applicationProcess;
    if (officialWebsite !== undefined) scheme.officialWebsite = officialWebsite;
    if (applicationDeadline !== undefined) scheme.applicationDeadline = applicationDeadline;
    if (featured !== undefined) scheme.featured = featured;
    if (status !== undefined) scheme.status = status;

    const updatedScheme = await scheme.save();

    res.status(200).json({
      success: true,
      message: "Scheme updated successfully.",
      scheme: updatedScheme
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


/* ========= Delete Scheme ========= */

export const deleteScheme = async (req, res) => {

  try {

    const scheme = await Scheme.findById(req.params.id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found."
      });
    }

    await scheme.deleteOne();

    res.status(200).json({
      success: true,
      message: "Scheme deleted successfully."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


/* ========= Get Featured Schemes ========= */

export const getFeaturedSchemes = async (req, res) => {

  try {

    const schemes = await Scheme.find({
      featured: true,
      status: "Active"
    })
      .populate("createdBy", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: schemes.length,
      schemes
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};