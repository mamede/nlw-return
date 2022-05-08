import { FeedbackType } from "..";

export interface FeedbackTypesStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackTypeRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}