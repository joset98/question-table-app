import { useEffect, useState } from "react";

const useFilterQuestions = (questions, filterWord) => {
    const [filterQuestions, setFilterQuestions] = useState([]);

    useEffect(() => {
        if(filterWord.length > 0){
          const LowerCasefilterWord = filterWord.toLowerCase();
          setFilterQuestions([...questions
            .filter( item => item.question.toLowerCase().includes(LowerCasefilterWord) )]);
        }
        else
          questions.length > 0 && setFilterQuestions([...questions]);
    }, [questions, filterWord]);

    return { filterQuestions }
}

export default useFilterQuestions;