import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    /* ========= References ========= */

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    scheme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scheme",
      required: true,
    },

    /* ========= Status ========= */

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Rejected"
      ],
      default: "Pending",
    },

    /* ========= Admin ========= */

    remarks: {
      type: String,
      default: "",
      trim: true,
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    approvedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model(
  "Application",
  applicationSchema
);

export default Application;