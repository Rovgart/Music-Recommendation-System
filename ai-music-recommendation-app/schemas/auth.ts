import z from "zod";
export const registerSchema = z
  .object({
    email: z.string().email({ message: " Please enter valid email" }),
    password: z
      .string()
      .min(1, { message: "Please enter password" })
      .max(60, { message: "You exceeded password maximum length" }),
    repeatPassword: z
      .string()
      .min(1, { message: "Please repeat your password" })
      .max(60, { message: "You exceeded repeat password maximum length" }),
  })
  .refine((data) => data.password !== data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password required" }),
});
export const changePasswordSchema = z
  .object({
    password: z.string().min(1, { message: "Please enter password" }),
    new_password: z.string().min(1, { message: "Please enter new password" }),
  })
  .refine((data) => data.password !== data.new_password, {
    message: "Passwords are the same",
    path: ["new_password"],
  });

export const changeEmailSchema = z
  .object({
    email: z.string().email(),
    new_email: z.string().email(),
  })
  .refine((data) => data.email !== data.new_email, {
    message: "Emails are the same",
  });
