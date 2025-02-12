import express from "express";
import userAuth from "../middelwares/authMiddleware.js";
import {
  createJobController,
  deleteJobController,
  getAllJobController,
  jobStatsController,
  updateJobController,
} from "../controllers/jobController.js";

const router = express.Router();

//routes
/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job management APIs
 */

/**
 * @swagger
 * /api/jobs/create-job:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Bad request
 */
// CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);

/**
 * @swagger
 * /api/jobs/get-job:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved jobs
 *       401:
 *         description: Unauthorized
 */

// GET JOBS || GET
router.get("/get-job", userAuth, getAllJobController);

/**
 * @swagger
 * /api/jobs/update-job/{id}:
 *   patch:
 *     summary: Update a job by ID
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       404:
 *         description: Job not found
 */

// UPDATE JOBS || PATCH
router.patch("/update-job/:id", userAuth, updateJobController);

/**
 * @swagger
 * /api/jobs/delete-job/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */

// DELETE JOBS || DELETE
router.delete("/delete-job/:id", userAuth, deleteJobController);

/**
 * @swagger
 * /api/jobs/job-stats:
 *   get:
 *     summary: Get job statistics
 *     tags: [Jobs]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Job statistics retrieved successfully
 */

//JOBS START FILTER || GET
router.get("/job-stats", userAuth, jobStatsController);
export default router;
