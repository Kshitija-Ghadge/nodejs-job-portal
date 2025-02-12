import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middelwares/authMiddleware.js";

//Router object
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: API for testing purposes
 */

/**
 * @swagger
 * /api/test/test-post:
 *   post:
 *     summary: Test POST endpoint
 *     tags: [Test]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello, this is a test!"
 *     responses:
 *       200:
 *         description: Successfully received the test post data
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad request
 */

//routes
router.post("/test-post", userAuth, testPostController);

//export
export default router;
