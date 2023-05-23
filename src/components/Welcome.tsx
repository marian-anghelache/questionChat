import { Cog6ToothIcon } from "@heroicons/react/24/outline";

interface IWelcome {
  handleSetQuestionsClick: () => void
}

export const Welcome: React.FC<IWelcome> = ({handleSetQuestionsClick}) => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleSetQuestionsClick}
      >
        <Cog6ToothIcon width={24}/>
      </button>
    </div>
    <h1 className="text-2xl font-bold mb-2">🤖 Hello</h1>
    <p>In this demo I am an expert in movie reviews, so feel free to ask me about movies!
    </p>
    <p>
    </p>
  </div>
);
