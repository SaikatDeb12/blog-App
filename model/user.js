const { createHmac, randomBytes, hash } = require("crypto");
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "/images/default.jpg",
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
  next();
});
const userModel = model("user", userSchema);
module.exports = userModel;
