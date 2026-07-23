import User from "../models/User.js";
import Scheme from "../models/Scheme.js";

/* ========= AI Recommendation ========= */

export const getRecommendedSchemes = async (req, res) => {

  try {

    /* ========= Find User ========= */

    const user = await User.findById(req.user._id);

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found."
      });

    }

    /* ========= Calculate Age ========= */

    const age = user.dateOfBirth
      ? new Date().getFullYear() -
        new Date(user.dateOfBirth).getFullYear()
      : 0;

    /* ========= Get Active Schemes ========= */

    const schemes = await Scheme.find({
      status: "Active"
    });

    /* ========= AI Filtering ========= */

const recommendedSchemes = schemes.filter((scheme) => {

  /* Age */

  if (age < scheme.minAge) return false;

  if (age > scheme.maxAge) return false;

  /* Income */

  if (
    scheme.incomeLimit > 0 &&
    user.annualIncome > scheme.incomeLimit
  )
    return false;

  /* State */

  if (
    scheme.state !== "India" &&
    scheme.state !== user.state
  )
    return false;

  /* District */

  if (
    scheme.district !== "All" &&
    scheme.district !== user.district
  )
    return false;

  /* Gender */

  if (
    scheme.gender !== "Any" &&
    scheme.gender !== user.gender
  )
    return false;

  /* Category */

  if (
    scheme.categoryEligibility !== "Any" &&
    scheme.categoryEligibility !== user.category
  )
    return false;

  /* Occupation */

  if (
    scheme.occupation !== "Any" &&
    scheme.occupation !== user.occupation
  )
    return false;

  /* Farmer */

  if (
    scheme.isFarmer &&
    !user.isFarmer
  )
    return false;

  /* Disability */

  if (
    scheme.hasDisability &&
    !user.hasDisability
  )
    return false;

  /* Minority */

  if (
    scheme.isMinority &&
    !user.isMinority
  )
    return false;

  /* BPL */

  if (
    scheme.isBPL &&
    !user.isBPL
  )
    return false;

  return true;

});

    /* ========= Response ========= */

    res.status(200).json({

      success: true,

      count: recommendedSchemes.length,

      recommendedSchemes

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};