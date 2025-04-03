import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "Day 1: Arrival in Kathmandu(1300m)",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vero omnis ad doloremque possimus earum similique exercitationem vitae quam, aliquam voluptatem reiciendis placeat, sint cum consequatur sit ipsa perspiciatis nobis.",
  },
  {
    question: "Day 2: Kathmandu SightSeeing",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vero omnis ad doloremque possimus earum similique exercitationem vitae quam, aliquam voluptatem reiciendis placeat, sint cum consequatur sit ipsa perspiciatis nobis.",
  },
  {
    question: "Day 3 : Kathmandu to Pokhara (823m) 200km Distance",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vero omnis ad doloremque possimus earum similique exercitationem vitae quam, aliquam voluptatem reiciendis placeat, sint cum consequatur sit ipsa perspiciatis nobis.",
  },
  {
    question: " Day 4: Pokhara to Gorepani",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vero omnis ad doloremque possimus earum similique exercitationem vitae quam, aliquam voluptatem reiciendis placeat, sint cum consequatur sit ipsa perspiciatis nobis.",
  },
  {
    question: "Day 5: Gorepani to Tadapani",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem incidunt minima architecto eaque vel iusto eos repellat! Maiores eum amet corrupti ex asperiores doloribus earum. Impedit ad recusandae error?",
  },
  {
    question: "Day 6: Tadapani to Chhomrong(2210m), 5-6 hrs Walk",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, libero deleniti quaerat quibusdam sint quam rerum earum voluptatum! Dolores voluptas necessitatibus tempora harum et eos assumenda unde velit autem. Sequi?",
  },
  {
    question: "Day 7: Chhomrong to Dovan(2600m), 5-6 hrs Walk",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum inventore, similique ipsum perspiciatis corporis aliquid nesciunt dolore libero vitae deleniti, doloremque quam in totam incidunt dolorum nemo omnis accusantium.",
  },
  {
    question: "Day 9 : Dovan to Machhapuchre Base Camp( MBC -3700m)",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde repellendus ipsa consequatur, maxime dolorum velit a tempore! Iusto vel ratione, nisi aperiam animi neque provident quod ipsam? Ducimus, omnis.",
  },
  {
    question: "Day 10 : Annapurna Base Camp",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde repellendus ipsa consequatur, maxime dolorum velit a tempore! Iusto vel ratione, nisi aperiam animi neque provident quod ipsam? Ducimus, omnis.",
  },
];

export default function DetailsItinerary() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 py-12">
      <div className="max-w-5xl ">
        <h2 className="text-3xl font-bold ">Detailed Itinerary</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center bg-green-50 cursor-pointer p-8"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left text-base font-bold">
                  {faq.question}
                </span>
                <span className="text-sm">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 text-left text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
