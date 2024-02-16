import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";


export const updateUser = async (req,res,next)=>{
  try {
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ message: 'Please provide a new password' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { password: hashedPassword } }, // Update only the password field
      { new: true }
    );

    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}

export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
export const requestPasswordReset = async (req, res, next) => {
  const { email } = req.body;
  console.log('Email:', email);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // // Generate a unique token
    // const resetToken = crypto.randomBytes(32).toString("hex");

    // // Save the token and expiration date to the user
    // user.resetToken = resetToken;
    // user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
    // const token = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   process.env.JWT
    // );
    await user.save();

    // Send password reset email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secreConnection:  false,
 // Set to true if your email provider requires a secure connection (e.g., Gmail)
      auth: {
        // user: "navdeepsinghsiliconindia@gmail.com",
        // pass: "qqzv nslp mopy rugi",
        user: "somanymornings@gmail.com",
        pass: "ampb yaxf fgmi gjri",
      },
    });

    const resetLink = `http://localhost:3000/reset-password/${user._id}`;
    const mailOptions = {
      to: email,
      subject: "Password Reset",
      html: `Click <a href="${resetLink}">here</a> to reset your password.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    next(error);
  }
};