import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "../utils/constants";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;