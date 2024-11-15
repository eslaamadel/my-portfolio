import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "What technologies and tools do you specialize in?",
      answer:
        "I specialize in technologies such as HTML, CSS, JavaScript, React, and Node.js, along with modern frameworks and responsive design techniques.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "I begin by understanding the client’s goals, followed by creating wireframes or mockups. I then focus on developing clean, efficient code and testing for responsiveness and performance.",
    },
    {
      question: "Can you customize websites to fit specific requirements?",
      answer:
        "Yes, I tailor each project to meet the client’s unique needs, offering custom designs and functionality based on their specifications.",
    },
    {
      question: "How long does it usually take to complete a project?",
      answer:
        "Timelines vary depending on the project scope. Simple websites typically take 1-2 weeks, while more complex applications can take longer.",
    },
    {
      question: "How can I get in touch to start a project?",
      answer:
        "To start a project, simply fill out the contact form on our website. I’ll respond promptly to discuss your project needs and how we can collaborate.",
    },
  ];

  return (
    <div className="flex flex-col py-[100px] justify-center items-center gap-24">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col justify-center items-center gap-4 edk:w-[1000px] tb:w-[500px] w-fit"
      >
        <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-4">
          FAQs
        </h2>
        <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
          This format introduces the section clearly and informs visitors about
          what they can expect to find in your FAQs, making it easier for them
          to navigate and learn more about you.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="dk:w-2/3 sdk:w-10/12 tb:w-11/12 w-8/12 mb:w-11/12"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
