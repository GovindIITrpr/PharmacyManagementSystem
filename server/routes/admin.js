import express from "express";
import {
  addDrug,
  addEmployee,
  addNewAdmin,
  getAllDrugs,
  getAllEmployees,
  loginAdmin,
  logoutAdmin,
  getAllSoldDrugs,
} from "../controllers/admin.js";
import { isAuthAdmin } from "../middlewares/isAuth.js";

const router = express.Router();

// actions for admin
router.route("/loginAdmin").get(loginAdmin);
router.route("/logoutAdmin").get(logoutAdmin);
router
  .route("/new")
  .post(isAuthAdmin, addNewAdmin)
  .post(isAuthAdmin, addEmployee)
  .post(isAuthAdmin, addDrug);
router.route("/getAllEmployees").get(isAuthAdmin, getAllEmployees);
router.route("/getAlldrugs").get(isAuthAdmin, getAllDrugs);
router.route("/getAllSoldDrugs").get(isAuthAdmin, getAllSoldDrugs);

export default router;
