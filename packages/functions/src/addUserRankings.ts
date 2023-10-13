import {
  User,
  type UserEntity,
} from "@mon-petit-rugby/core/entities/userEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async (_evt) => {
  if (!_evt.body) {
    return {
      statusCode: 400,
      body: "missing body",
    };
  }

  const user: UserEntity = JSON.parse(_evt.body);

  await User.put(user).go();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: "user added",
  };
});
