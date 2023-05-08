import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import styled from 'styled-components';

const categories=[
    {
        name:'home',
        text:'홈(로고_)'
    },
    {
        name:'join',
        text:'회원가입'
    },
    {
        name:'login',
        text:'로그인'
    },
    {
        name:'sch',
        text:'나의일정'
    },
]

//카테고리 영역 블락
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem 0 1rem 30rem;
  margin-left: 30px;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
//카테고리 버튼 영역 스타일
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  

  &:hover{
    color: #495057;
  }

  &+&{
    margin-left: 1rem;
  }
`;
export default function Categories(){
    return(
        <div>
            <header>
                < CategoriesBlock>
                    {categories.map(c =>(
                        <Category
                            key={c.name}
                            to={c.name==='home'?'/':`/${c.name}`}>
                            {c.text}
                        </Category>
                    ))}
                </CategoriesBlock>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
