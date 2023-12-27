import express from "express";
import {
  sellDrug,
  getAllDrugs,
  loginEmployee,
  logoutEmployee,
  makeReceipt,
} from "../controllers/employee.js";
import { isAuthEmployee } from "../middlewares/isAuth.js";

const router = express.Router();

// actions for employee
router.route("/loginEmployee").get(loginEmployee);
router.route("/logoutEmployee").get(logoutEmployee);
router.route("/sell").post(isAuthEmployee, sellDrug);
router.route("/receipt").get(isAuthEmployee, makeReceipt);
router.route("/getAlldrugs").get(isAuthEmployee, getAllDrugs);

export default router;
