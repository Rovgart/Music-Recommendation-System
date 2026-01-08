import { z } from "zod";
export const registerSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: " Please enter valid email" }),
	password: z
		.string()
		.min(1, { message: "Please enter password" })
		.max(60, { message: "You exceeded password maximum length" }),
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
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
