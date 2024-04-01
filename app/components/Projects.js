import Link from "next/link";

export default function Projects() {
  const cardsData = [
    {
      name: "Todo-list",
      image:
        "https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Todo-list",
      link: "https://github.com/Yael353/Todolist-Redux.git",
      description: [
        "Todo Creation: Users can add new tasks to their todo list.",
        "Todo Completion: Users can mark tasks as completed or uncompleted.",
        "Todo Deletion: Users can remove tasks from their todo list.",
        "Global State Management: Redux Toolkit is utilized to manage the global state of the todo list, ensuring data consistency and scalability.",
        "Next.js Integration: The todo list is seamlessly integrated within a Next.js application, providing server-side rendering, routing, and other benefits of the Next.js framework.",
      ],
    },
    {
      name: "News-site",
      image:
        "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/Rodrigo-Sebastian/new-site.git",
      description: [
        "Homepage with Headlines: Top news displayed and headlines implemented for navigation to different news categories.",
        "Category Pages: Separate pages for various news categories where the users can access category pages via navigation links",
        "Individual Article Pages: Pages dedicated to presenting the content of a news article.",
        "Bookmarking Functionality: Users can bookmark articles of interest and are provided with a page for saved articles for easy access.",
        "A flow of additional articles at the bottom of each individual article page for further reading.",
      ],
    },
    {
      name: "Quiz-game",
      image:
        "https://plus.unsplash.com/premium_photo-1669077046862-9283191f4ed7?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/Yael353/Quiz.git",
      description: [
        "User Authentication: Users log in to access quizzes, while administrators have additional controls for managing questions.",
        "Quiz Participation: Users select answers to multiple-choice questions presented in quizzes.",
        "Quiz Result: After completing a quiz, users see their score, including the number of correct answers and percentage.",
        "Quiz Management (Admins Only): Administrators can add, delete, and update quiz questions from the Admin page.",
        "User-Friendly Interface: The interface prioritizes simplicity and ease of navigation for a seamless user experience.",
      ],
    },
  ];

  return (
    <>
      <div id="Projects">
        <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
          Projects
        </h3>

        <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20 ">
          {cardsData?.map((item, index) => (
            <div
              className="bg-slate-600 p-6 rounded-lg shadow-xl mx-4 px-8"
              key={index}
            >
              <div className="flex items-center justify-center">
                <img
                  className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                  src={item?.image}
                />
              </div>
              <h4 className="text-xl text-white font-bold mb-2 mt-4">
                {item?.name}
              </h4>
              <ul className="text-xl text-white font-light text-left list-disc ">
                {item?.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
                <a
                  className="flex justify-center items-center pt-4"
                  href={item?.link}
                >
                  <button className=" text-white bg-blue-400 px-4 py-2 rounded-full hover:bg-blue-600">
                    Go to destination
                  </button>
                </a>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
