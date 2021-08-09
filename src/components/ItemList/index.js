import React, { useState }from 'react';
import * as S from './style';
import data from '../../data/data.json';
import opened from '../../assets/opened.svg';
import closed from '../../assets/closed.svg';

const base = data;
const openedIcon = <img src={opened} alt="icon opened"/>;
const closedIcon = <img src={closed} alt="icon closed"/>;

const generatePath = (...parts) => parts.filter((a) => a).join(".");


const childStyle = {
    marginLeft: 8,
    borderLeft: "1px solid #0043594f",
    borderBottom: ".5px solid #0043594f",
    paddingLeft: 50
}

const Person = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [isSelected, setSelected] = useState(false);

        function showInfo (){
            setExpanded(!isExpanded);
        }


        const handleChange = (e) => {
            // setExpanded(e.currentTarget.checked);
            setSelected(e.currentTarget.checked);
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
                checked={isSelected}
                onChange={handleChange}/>
                <S.Item onClick={showInfo}>{props.name}</S.Item>
                
                {children.length > 0 ? 
                    <S.Icon onClick={showInfo}>{isExpanded ? openedIcon : closedIcon}</S.Icon> 
                : 
                null }
            </div>
            {isExpanded ? children : undefined}
        </S.Container>
    ); 
};

export function ItemList () {
    return (
        <S.List>
            <S.Title>Árvore de Itens</S.Title>
            <Person children={base} path={""} />
        </S.List>
    );
}