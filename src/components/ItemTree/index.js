import React from 'react';
import * as S from './style';
import data from '../../data/data.json';

const base = data;

const Person = (props) => {
  return (
    <S.Container style={{ marginLeft: props.depth * 8 }}>
      <ul>
        <li onClick={clique}>{props.name}</li> 
      </ul>
      {Object.values(props.children).map((child) => (
        <Person 
        {...child} 
        key={child.id} 
        depth={props.depth + 1} 
        isChecked={props.checked}/>
        ))}
    </S.Container>
  );
};

function clique (){
  return (
    console.log("ok")
  )
}

export function ItemTree (){
return(
  <Person children={base} depth={0} isChecked={false}/>
);
}
      
//     // FUNCIONA
//     return (

//         <S.Container>
//             {api.map((item) => {
//                 return (
//                     <ul>
//                         <input type="checkbox"></input>
//                         <S.Name>{item.name}</S.Name>
//                         <S.Name>{item.children}</S.Name>
//                     </ul>
//                 );
//             }
//             )}
//         </S.Container>

//     );
// }