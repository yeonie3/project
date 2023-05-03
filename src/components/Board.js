import React from 'react';

const Board = () => {
    return (
        <div className="board-container">
            <h2>게시판</h2>
            <div className="board-list">
                <div className="board-item">
                    <h3>게시물 제목 1</h3>
                    <p>게시물 내용 1</p>
                </div>
                    <div className="board-item">
                        <h3>게시물 제목 2</h3>
                        <p>게시물 내용 2</p>
                    </div>
                    <div className="board-item">
                        <h3>게시물 제목 3</h3>
                        <p>게시물 내용 3</p>
                    </div>
                </div>
            </div>
        );
            };

        export default Board;