interface IWelcome {
  handleSetQuestionsClick: () => void
}

export const Welcome: React.FC<IWelcome> = ({handleSetQuestionsClick}) => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <h1 className="text-2xl font-bold mb-2">🤖 Hello</h1>
    <p>In this demo I am an expert in movie reviews, so feel free to ask me about movies!
    </p>
    <div className="flex justify-end">
    <button
        type="button"
        onClick={handleSetQuestionsClick}
        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        Set questions
      </button>
    </div>
    <p>
    </p>
  </div>
);
