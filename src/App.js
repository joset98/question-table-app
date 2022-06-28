import { Box } from "@mui/material";
import Table from "./components/Table/Table";
import { AppContainer } from "./core-ui/styled";
import { Header } from "./Layouts/Header";
import { tableQuestionHeader } from "./constants";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  const [filterQuestions, setFilterQuestions] = useState([]);

  const [filterWord, setFilterWord] = useState('');


  return (
    <div className="App">
      <Header />
      <AppContainer sx={{ mt: 10 }}>
        <Box>
          <Table
            headers={tableQuestionHeader}
            rows={filterQuestions}
            title={'Browse Questions'}
          />
        </Box>
      </AppContainer>
    </div>
  );
}

export default App;
