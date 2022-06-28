const API_URL = 'https://opentdb.com/api.php?';

const fetchQuestions = async () => {
    const params = new URLSearchParams(
        { amount: 50, difficulty: 'medium', type: 'multiple' }
    );

    try {
      const response = await fetch( `${API_URL}${params}`)
  
      return response;    
    } catch (error) {

      console.log(error);
      return error;
    }
};

export default fetchQuestions;
