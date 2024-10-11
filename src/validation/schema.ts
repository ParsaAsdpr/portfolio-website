import { z } from "zod";

const schema = z.object({
  name: z
    .string({ message: "Don't forget to tell us your name!" })
    .min(3, { message: "Your name is too short" }),
  email: z
    .string({ message: "Looks like we need your Email." })
    .email({ message: "Oops! That's not a valid Email." }),
  subject: z
    .string({ message: "A subject would be super helpful!" })
    .min(2, { message: "Can you specify a longer subject, please?" }),
  message: z
    .string({ message: "Seems like you forgot to enter your message." })
    .min(8, { message: "Your message is too short." }),
});

export type Schema = z.infer<typeof schema>;

export default schema;
