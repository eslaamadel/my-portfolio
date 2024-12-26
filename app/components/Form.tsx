"use client";
import React, { useState, useMemo } from "react";
import { useForm as useFormspree } from "@formspree/react";
import { useForm as useReactHookForm, SubmitHandler } from "react-hook-form";
import { ValidationError } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Define form schema using zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  breif: z
    .string()
    .min(10, { message: "Brief must be at least 10 characters." })
    .max(160, { message: "Brief must not be longer than 160 characters." }),
  services: z
    .array(z.string())
    .nonempty({ message: "You must select at least one service." }),
  timeline: z.string().nonempty({ message: "Please select a timeline." }),
  discovery: z
    .string()
    .nonempty({ message: "Please select how you found me." }),
});

const ContactForm = () => {
  const { toast } = useToast(); // Hook to trigger toast notifications
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  // Integrate Formspree
  const [state, handleSubmitFormspree] = useFormspree("xnnqqygb");

  // Integrate React Hook Form with zod for validation
  const form = useReactHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      services: [],
      breif: "",
      timeline: "",
      discovery: "",
    },
  });

  // Memoized service and discovery options
  const serviceOptions = useMemo(
    () => [
      { id: "Web Development", label: "Web Development" },
      { id: "UI/UX Design", label: "UI/UX Design" },
    ],
    []
  );

  const timelineOption = useMemo(
    () => [
      { id: "1week", label: "1 Week" },
      { id: "2week", label: "2 Week" },
      { id: "1month", label: "1 Month" },
    ],
    []
  );
  const discoveryOptions = useMemo(
    () => [
      { id: "linkedin", label: "LinkedIn" },
      { id: "google", label: "Google Search" },
    ],
    []
  );

  // Watch form values
  const formValues = form.watch(); // Watch all form fields

  // Check if any form field has a value
  const isFormEmpty = !Object.values(formValues).some(
    (value) => value && value.length > 0
  );

  const [submissionError, setSubmissionError] = useState<string | null>(null); // State for error messages

  // Form submission handler
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values
  ) => {
    setIsSubmitting(true);
    setSubmissionError(null); // Reset the error state at the beginning

    try {
      // Simulate a delay of 2 seconds to make "Submitting..." visible
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Flatten services array into a comma-separated string
      const submissionData = {
        ...values,
        services: values.services.join(", "),
      };

      // Send data to Formspree
      handleSubmitFormspree(submissionData);

      // Check for errors in submission state
      if (state.errors) {
        const errorMessage = Object.entries(state.errors)
          .map(
            ([key, error]) => `${key}: ${error.message || "Error occurred."}`
          )
          .join(", ");
        setSubmissionError(errorMessage); // Set the error state
        throw new Error(errorMessage); // Throw an error to skip to the catch block
      }

      // If no errors, show success toast
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      form.reset(); // Reset form on success
      // console.log("Form submitted successfully!");
    } catch (error) {
      // Handle errors from submission
      toast({
        title: "Form submission failed",
        description: submissionError || "An unexpected error occurred.",
        variant: "destructive",
      });
      // console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div className="flex flex-col py-[100px] justify-center items-center gap-24">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3 text-center leading-tight">
          Interested in working with me?!
        </h2>
        <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
          Fill out this form, and I'll get in touch with you about your project.
        </p>
      </div>
      <div></div>
      <Form {...form}>
        <form
          data-aos="fade-up"
          data-aos-duration="700"
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb:w-11/12 tb:w-11/12 sdk:w-10/12"
        >
          {/* Username, Email, Phone */}
          <div className="flex flex-row sdk:flex-col tb:flex-col mb:flex-col gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>What’s your name?</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>What’s your email?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      {...field}
                      inputMode="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </FormControl>
                  <FormMessage />
                  <ValidationError field="email" errors={state.errors} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>What’s your phone number?</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      {...field}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) e.preventDefault();
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Brief Description */}
          <FormField
            control={form.control}
            name="breif"
            render={({ field }) => (
              <FormItem className="mt-10 mb-14">
                <FormLabel>Tell me about your project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave a message..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Services, Timeline, Discovery */}
          <div className="flex gap-12 mb:gap-8 flex-col edk:flex-row">
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What services are you looking for?</FormLabel>
                  {serviceOptions.map((item) => (
                    <FormItem
                      key={item.id}
                      className="flex items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(item.id)}
                          onCheckedChange={(checked) => {
                            const newValues = checked
                              ? [...field.value, item.id]
                              : field.value.filter(
                                  (value) => value !== item.id
                                );
                            field.onChange(newValues);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your timeline for this project?</FormLabel>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {timelineOption.map((option) => (
                      <FormItem
                        key={option.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discovery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you find me?</FormLabel>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {discoveryOptions.map((option) => (
                      <FormItem
                        key={option.id}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Formspree Error Handling */}
          {state.errors && (
            <div className="text-red-500">
              Submission failed. Please try again.
            </div>
          )}

          <div className="flex justify-start space-x-2 mt-11">
            <Button
              variant="default"
              type="submit"
              size="lg"
              disabled={isFormEmpty || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant="secondary"
              type="reset"
              size="lg"
              disabled={isFormEmpty || isSubmitting}
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
