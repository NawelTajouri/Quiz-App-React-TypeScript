import React from 'react';
import BGCard from '../images/card1.jpg';
//Types
import { AnswerObject } from '../App';
//styles
import { ButtonWrapper, WrapperCard, SpanNumber } from './QuestionCard.styles';
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props>  = ({
    question,
    answers,
     callback,
      userAnswer, 
      questionNr, 
      totalQuestions
    }) => (
        <>
    <div>
       
        <div className='row row-cols-3' >
            <div className='col'></div>
            <div className='col d-flex justify-content-center'>
               <WrapperCard className='card m-2 cb1 text-center'>
                    <SpanNumber className='card-number fw-bold'>{questionNr}</SpanNumber>
                    <p className='card-title mb-4'>
            Question: {questionNr} / {totalQuestions}
                    </p>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: question}}/>
                    
                    <div>
            {answers.map(answer => (
                <ButtonWrapper
                 key={answer}
                 correct= {userAnswer?.correctAnswer === answer}
                 userClicked= {userAnswer?.answer === answer}
                 >
                  <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>   
                </ButtonWrapper>
            ))}
        </div>
                </WrapperCard> 

        
        
        
        
        </div>
        <div className='col'></div>
        </div>
       
        
    </div>
    </>);

export default QuestionCard;