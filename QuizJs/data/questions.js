import { Question } from "../models/Questions.js";
import { data } from "./data.js";

export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
