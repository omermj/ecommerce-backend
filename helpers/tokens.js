"use strict";

import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

/** Return signed JWT from user data. */
const createToken = (user) => {
  let payload = {
    username: user.username,
    admin: user.admin,
  };
  return jwt.sign(payload, SECRET_KEY);
};

export default createToken;
