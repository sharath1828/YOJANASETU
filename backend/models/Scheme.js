import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema(
  {
    /* ========= Basic Information ========= */

    schemeName: {
      type: String,
      required: true,
      trim: true,
    },

    schemeCode: {
      type: String,
      unique: true,
      uppercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Agriculture",
        "Education",
        "Health",
        "Housing",
        "Employment",
        "Women",
        "Senior Citizens",
        "Students",
        "Business",
        "Social Welfare",
        "Other",
      ],
    },

    /* ========= Location ========= */

    state: {
      type: String,
      default: "India",
    },

    district: {
      type: String,
      default: "All",
    },

    /* ========= Eligibility ========= */

    minAge: {
      type: Number,
      default: 0,
    },

    maxAge: {
      type: Number,
      default: 120,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Any"],
      default: "Any",
    },

    categoryEligibility: {
      type: String,
      enum: ["General", "OBC", "SC", "ST", "EWS", "Any"],
      default: "Any",
    },

    incomeLimit: {
      type: Number,
      default: 0,
    },

    occupation: {
      type: String,
      default: "Any",
    },

    isFarmer: {
      type: Boolean,
      default: false,
    },

    hasDisability: {
      type: Boolean,
      default: false,
    },

    isMinority: {
      type: Boolean,
      default: false,
    },

    isBPL: {
      type: Boolean,
      default: false,
    },

    /* ========= Benefits ========= */

    benefits: [
      {
        type: String,
        trim: true,
      },
    ],

    requiredDocuments: [
      {
        type: String,
        trim: true,
      },
    ],

    applicationProcess: {
      type: String,
      trim: true,
    },

    officialWebsite: {
      type: String,
      trim: true,
    },

    applicationDeadline: {
      type: Date,
    },

    /* ========= Admin ========= */

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Scheme = mongoose.model("Scheme", schemeSchema);

export default Scheme;