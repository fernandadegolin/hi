import React, { useState }from 'react';
import * as S from './style';
import data from '../../data/data.json';
import opened from '../../assets/opened.svg'
import closed from '../../assets/closed.svg'

const base = data;

const openedIcon = <img src={opened} alt="icon opened"/>;
const closedIcon = <img src={closed} alt="icon closed"/>;

const generatePath = (...parts) => parts.filter((a) => a).join(".");

const childStyle = {
    marginLeft: 8,
    borderLeft: "1px solid #80808073",
    borderBottom: ".5px solid #80808073",
    paddingLeft: 8
};


const Person = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    
    function ok (){
        setExpanded(!isExpanded);
        console.log("ta clicando")
    }
        const handleChange = (e) => {
            setExpanded(e.currentTarget.checked);
        };


    const children = Object.values(props.children).map((child) => (        
        <Person
        {...child}
        key={child.id}
        path={generatePath(props.path, child.id)}
        />
    ));

    if (props.path === "") 
        return children;

    const depth = props.path.split(".").length;
        return (
            <S.Container style={depth > 1 ? childStyle : undefined}>
                <div>
                    <input
                    type="checkbox"
                    value=""
                    // checked={isExpanded}
                    // onChange={handleChange}
                    // disabled={children.length === 0}
                    />
               <S.Item onClick={ok}>{props.name}</S.Item>
               <S.Icon 
               onClick={ok}
               onChange={handleChange}
               disabled={children.length === 0}
               >{isExpanded ? openedIcon : closedIcon }</S.Icon> 
           
               </div>
            {isExpanded ? children : undefined}
            </S.Container>
    ); 
};

export function Question () {
      return (
              <Person  children={base} path={""} />
    );
  
        }
  


//   return(
//       <Person children={base} path={""} />
//   )
  


