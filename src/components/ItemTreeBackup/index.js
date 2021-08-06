// import React, { useState }from 'react';
// import * as S from './style';
// import { ItemTree } from '../ItemTree';


//     export function Question() {
//         const QuestionAnswer = ({ id, name }) => {
//           const [showAnswer, setShowAnswer] = React.useState(false);
      
//           function showMeAnswer() {
//             setShowAnswer(!showAnswer);
//           }

      
//           return (
//             <S.AccordionSummary onClick={showMeAnswer}>
//               <S.ContainerQuestion>
//                 <ItemTree>{name}</ItemTree>
//                 <S.Questions>{id}</S.Questions>
//                 {showAnswer ? (
//                   <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M1.5 8L0 6.3696L6 -4.17233e-07L12 6.3696L10.5 8L6 3.2L1.5 8Z" fill="#21B1A9"/>
//                   </svg>
                  
//                 ) : (
//                   <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M10.5 0L12 1.6304L6 8L0 1.6304L1.5 0L6 4.8L10.5 0Z" fill="black"/>
// </svg>

//                 )}
//               </S.ContainerQuestion>
//               {showAnswer && <S.Answer>{name}</S.Answer>}
//             </S.AccordionSummary>
//           );
//         };

//           console.log(data);

          
//           return(
//             <S.Accordion>
            
//           <QuestionAnswer/>
      
//       </S.Accordion>
//         )}