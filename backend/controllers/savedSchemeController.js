import User from "../models/User.js";
import Scheme from "../models/Scheme.js";

/* ========= Save Scheme ========= */

export const saveScheme = async (req, res) => {

  try {

    const { id } = req.params;

    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found."
      });
    }

    const user = await User.findById(req.user._id);

    const alreadySaved = user.savedSchemes.includes(id);

    if (alreadySaved) {
      return res.status(400).json({
        success: false,
        message: "Scheme already saved."
      });
    }

    user.savedSchemes.push(id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Scheme saved successfully."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
/* ========= Remove Saved Scheme ========= */

export const removeSavedScheme = async (req, res) => {

  try {

    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const isSaved = user.savedSchemes.includes(id);

    if (!isSaved) {

      return res.status(404).json({

        success: false,

        message: "Scheme not found in saved list."

      });

    }

    user.savedSchemes = user.savedSchemes.filter(

      schemeId => schemeId.toString() !== id

    );

    await user.save();

    res.status(200).json({

      success: true,

      message: "Scheme removed successfully."

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
/* ========= Get Saved Schemes ========= */

export const getSavedSchemes = async (req, res) => {

  try {

    const user = await User.findById(req.user._id)
      .populate("savedSchemes");

    res.status(200).json({

      success: true,

      count: user.savedSchemes.length,

      savedSchemes: user.savedSchemes

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};