import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    /* ================= Basic Information ================= */

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    /* ================= Personal Information ================= */

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    category: {
      type: String,
      enum: ["General", "OBC", "SC", "ST", "EWS"],
    },

    state: {
      type: String,
      trim: true,
    },

    district: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    /* ================= Professional Information ================= */

    occupation: {
      type: String,
      enum: [
        "Student",
        "Farmer",
        "Government Employee",
        "Private Employee",
        "Business",
        "Self Employed",
        "Unemployed",
        "Other",
      ],
    },

    education: {
      type: String,
      trim: true,
    },

    annualIncome: {
      type: Number,
      default: 0,
    },

    /* ================= Eligibility Information ================= */

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

    /* ================= AI Preferences ================= */

    preferredLanguage: {
      type: String,
      default: "English",
    },

    /* ================= User Status ================= */

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
    },

    /* ================= Relationships ================= */

    savedSchemes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Scheme",
      },
    ],

    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],

    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;