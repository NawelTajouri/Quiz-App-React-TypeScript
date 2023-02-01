import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';


//Components
import QuestionCard from './components/QuestionCard';
//Types
import { QuestionState,Difficulty } from './API';
 // styles
 import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

const TOTAL_Questions = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] =  useState(0)
  const [gameOver, setGameOver] = useState(true);


  //console.log(fetchQuizQuestions(TOTAL_Questions, Difficulty.EASY ))
  
  console.log(questions)
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_Questions, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
  }

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //userAnswer
      const answer = e.currentTarget.value;
       //check answer against correct answer
       const correct = questions[number].correct_answer === answer;
       // add score if answer is correct
       if (correct) setScore(prev => prev + 1);
       //save answer in the array for userAnswers
       const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
       };
       setUserAnswers((prev) => [...prev, AnswerObject])
    }
  }

  const nextQuestion = () => {
    //move on to the next question if not the last question
    const nextQuestion = number + 1 ;
    if (nextQuestion === TOTAL_Questions) {
      setGameOver(true);

    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper className="App">
      <h1 className='title text-center py-4'>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_Questions ? (
        <div className='text-center'>
      <button  className='btn btn-warning' onClick={startTrivia}>
        Start
      </button>
      </div>
      ) : null}
      {!gameOver ? <div className='text-center'><p className='score'>Score: {score}</p></div> : null }
      {loading && <p className='text-center'>Loading Questions ...</p>}
      {!loading && !gameOver &&
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions= {TOTAL_Questions}
        question ={questions[number].question}
        answers = {questions[number].answers}
        userAnswer= {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      /> }
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_Questions - 1 ? <div className='text-center'> <button className= 'btn btn-warning' onClick= {nextQuestion}>Next Question</button> </div> : null }
      
    </Wrapper>
    </>
  );
}

export default App;
