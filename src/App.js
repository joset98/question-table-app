import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import fetchQuestions from "./services/fetchQuestions";
import Table from "./components/Table/Table";
import { AppContainer } from "./core-ui/styled";
import { Header } from "./Layouts/Header";
import { tableQuestionHeader } from "./constants";
import { fetcherStream } from "./utils";
import useFilterQuestions from "./hooks/usefilterQuestions";

function App() {
  const [questions, setQuestions] = useState([]);

  const [filterWord, setFilterWord] = useState('');

  const { filterQuestions } = useFilterQuestions(questions , filterWord)

  const onChangeFilter = (evt) => {
    setFilterWord(evt.target.value);
  }

  useEffect(() => {
    const response =  fetchQuestions();
    // get results from resource
    fetcherStream(response).then(({results}) => setQuestions(
      results.map( (question, index) => ({id: index + 1, ...question})))
      );    
  }, []);

  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Box>
          <h1>HELLO</h1>
          <Table
            headers={tableQuestionHeader}
            rows={filterQuestions}
            title={'Browse Questions'}
            filter={filterWord}
            onChangeFilter={onChangeFilter}
          />
        </Box>
      </AppContainer>
    </div>
  );
}

export default App;
