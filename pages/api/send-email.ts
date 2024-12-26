import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "https://hooks.zapier.com/hooks/catch/810225/28sy0om/";
  const data = {
    body: req.body,
    subject: "Email from website",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({ success: true, message: "Email sent successfully" });
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(400).json({ success: false, message: "Failed to send email" });

    });
}
