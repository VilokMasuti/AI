import { createContext, useState } from "react";
import runChat from "../Config/gemini.js";
export const Context = createContext();

const ContextProvider = props => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prePrompts, setPrePrompts] = useState([]);
  const [showresult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultdata, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(pre => pre + nextWord);
    }, 74 * index);
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const data = async prompt => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let responses;
    if (prompt !== undefined) {
      responses = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrePrompts(pre => [...pre, input]);
      setRecentPrompt(input);
      responses = await runChat(input);
    }

    let newResponse = responses.split(" ");
    for (let i = 0; i < newResponse.length; i++) {
      const nextWord = newResponse[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    loading,
    data,
    setRecentPrompt,
    showresult,
    setPrePrompts,
    prePrompts,
    recentPrompt,
    setShowResult,
    resultdata,
    setResultData,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
