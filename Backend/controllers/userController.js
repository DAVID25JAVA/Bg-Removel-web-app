import { Webhook } from "svix";
import User from "../models/userModel.js";

const clerkWebhook = async (req, res) => {
  try {
    const whook = new Webhook(process?.env?.CLERK_WEBHOOK_SECRET);
    console.log(whook);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamps": req.headers["svix-timestamps"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req?.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data?.id,
          email: data?.email_addresses[0].email_address,
          firstName: data?.first_name,
          lastName: data?.last_name,
          photo: data?.image_url,
        };

        await User.create(userData);
        console.log(userData);
        
        res.json({});

        break;
      }
      case "user.updated": {
        const userData = {
          email: data?.email_addresses[0].email_address,
          firstName: data?.first_name,
          lastName: data?.last_name,
          photo: data?.image_url,
        };

        await User.findOneAndUpdate({ clerkId: data?.id }, userData);
            res.json({});
        break;
      }
        case "user.deleted": {
            await User?.findOneAndDelete({ clerkId: data?.id });
            res?.json({})
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.log("web hook error:", error?.message);
    res.json({ success: false, message: "something went wrong" });
  }
};

export {clerkWebhook}