import authRouter from "../../middleware/auth";

const { GRATZ_URL } = process.env;

export default authRouter().get(async (req, res) => {
  const sendbody = {
    message: "Thx!",
    privateMessage: "ooo",
    amount: 1,
    email: "iAn@Ae.sTudio",
  };

  try {
    const response = await fetch(`${GRATZ_URL}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: req.headers.cookie,
      },
      body: JSON.stringify(sendbody),
    });
    const result = await response.json();
    res.status(200).json(result);
  } catch (e) {
    res.status(200).json({ ok: false, error: e.toString() });
  }
});
