import { useState } from "react";
import bugUrl from "../../assets/bug.svg";
import ideaUrl from "../../assets/idea.svg";
import thoughtUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: bugUrl,
      alt: "Bug image",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaUrl,
      alt: "Idea image",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtUrl,
      alt: "Thought image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="relative flex flex-col items-center p-4 mb-4 shadow-lg bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartedRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartedRequested={handleRestartFeedback}
              onFeedbackSent={() => {
                setFeedbackSent(true);
              }}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela Rocketseat
      </footer>
    </div>
  );
}
