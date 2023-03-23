import express from "express";
import {
  //create,
  //get,
  getAll, getone, patch, put, xoa, create
  // remove,
  // update,
  
} from "../controllers/user.js";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", getone);
router.delete("/users/:id", xoa);
router.patch("/users/:id", patch);
router.put("/users/:id", put);
router.post("/users", create);


// router.get("/users/:id", get);
// router.post("/users", create);
// router.delete("/users/:id", remove);
// router.patch("/users/:id", update);
// router.put("/products/:id", put);

export default router;