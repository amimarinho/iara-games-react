import users from "../../users.json";

export default async () => {
  return new Response(JSON.parse(users));
};
