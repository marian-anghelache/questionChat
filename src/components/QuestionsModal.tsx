import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react'
import Modal from './common/Modal'
import { LOCAL_STORAGE_KEY } from './common/logic/constants'

interface IQuestionsModal {
    isOpen: boolean,
    handleClose: () => void,
    updateQuestions: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const QuestionsModal: FC<IQuestionsModal> = ({isOpen, handleClose, updateQuestions}) => {
  const [questions, setQuestions] = useState<Record<string, string>>({})
  const [prompt, setPrompt] = useState("")

  useEffect(() => {
    const localQuestionsAndPrompt = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(localQuestionsAndPrompt)
    if (localQuestionsAndPrompt) {
      try {
        const values = JSON.parse(localQuestionsAndPrompt) as {prompt: string, question1: string, question2: string, question3: string}
        setQuestions({question1: values.question1, question2: values.question2, question3: values.question3})
        setPrompt(values.prompt)
      } catch(error) {
        console.log('Cannot parse localstorage: ', localQuestionsAndPrompt)
      }
    }
  }, [isOpen])

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({...questions, prompt}))
      updateQuestions(questions)

      handleClose()
  }

  const handleQuestionChange = (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestions({...questions, [e.target.name]: e.target.value})
  }

  const handlePromptChange = (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <form onSubmit={handleSave}>
        <div className='border-b py-6'>
            <div >
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Prompt
                </label>
                <div className="mt-2">
                <textarea
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    name="prompt"
                    required
                    onChange={handlePromptChange}
                    value={prompt}
                />
                </div>
            </div>
        </div>
        <div className='py-6'>
            <div className='mb-8'>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Question 1:
                </label>
                <div className="mt-2">
                <textarea
                    name="question1"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    required
                    onChange={handleQuestionChange}
                    value={questions.question1}
                />
                </div>
            </div>
            <div className="col-span-full mb-8">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Question 2
                </label>
                <div className="mt-2">
                <textarea
                    name="question2"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" 
                    required
                    onChange={handleQuestionChange}
                    value={questions.question2}
                />
                </div>
            </div>
            <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Question 3
                </label>
                <div className="mt-2">
                <textarea
                    name="question3"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    required
                    onChange={handleQuestionChange}
                    value={questions.question3}
                />
                </div>
            </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          >
            Save
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default QuestionsModal