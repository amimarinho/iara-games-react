import users from "../../users.json";

export default async () => {
  return new Response(JSON.stringify(users.users), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
