/*generate documentation for this function*/
/**
 * @file comments.js
 * @description This file contains the routes for managing comments in the application.
 * It includes routes to get all comments and delete a comment by ID.
 * @requires express
 * @requires mongoose
 * @requires Comment model                                                                                                          
* @exports router
*/

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Get all comments
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment", error });
    }
});
