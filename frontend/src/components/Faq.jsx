import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is the process of apartment clearance?",
    answer: "The process typically involves an initial assessment, followed by planning and organization of the removal tasks. Specialized teams handle the removal and recycling or disposal of items in compliance with regulations.",
  },
  {
    question: "How do I find a reliable clearance company?",
    answer: "It's recommended to choose a company based on recommendations. Look for clear contract terms and avoid unclear cubic meter pricing.",
  },
  {
    question: "Can I dispose of bulky waste for free?",
    answer: "Yes, in some cases, bulky waste can be taken to recycling centers for free, which can help save costs.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-gray-800"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-gray-500" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
