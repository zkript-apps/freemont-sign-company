import { mailOptions, transporter } from "@/helpers/nodemailer";

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...(data.file && {
          attachments: [
            {
              // data uri as an attachment
              path: data.file,
            },
          ],
        }),
        to: data.email,
        text: data.message,
        html: data.message,
        subject: data.subject,
      });

      return res.status(200).json({ success: true });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
