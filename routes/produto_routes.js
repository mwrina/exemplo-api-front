import express from "express";

import {produto} from "../controller/produto_controller.js";

let router = express.Router();

router.get("/produto", produto.all);

export {router};