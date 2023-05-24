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
    <h1 className="text-2xl font-bold mb-2">LawAssist - Your trusted virtual legal assistant</h1>
    <p>We understand that navigating the complexities of the legal world can be overwhelming. That's why we're here to provide you with personalized guidance and support. Whether you have questions about legal procedures, need assistance with legal documents, or seek general legal advice, our intelligent chatbot is ready to help.</p>
    <p>
    </p>
  </div>
);
