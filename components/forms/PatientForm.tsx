"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../ui/SubmitButton";

//Form fields types
export enum FromFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
});

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h2 className="header">Hi there👋</h2>
          <p className="text-dark-700">Schedule Your First Appointment</p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FromFieldType.INPUT}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          control={form.control}
          fieldType={FromFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@email.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          control={form.control}
          fieldType={FromFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="+1(555)-444 3333"
        />

        <SubmitButton isLOading={isLoading}/>
        
      </form>
    </Form>
  )
}

export default PatientForm;