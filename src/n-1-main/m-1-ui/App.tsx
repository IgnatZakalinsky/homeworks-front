import React from 'react';
import './App.css';

const App = () => {

    console.log('rendering App');
    return (
        <div className="App">
            home works

            <div style={{color: "red"}}>
                mentor login
            </div>

            <div>
                students

                <div style={{color: "red"}}>
                    rules:

                    <div>
                        оценки:
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            <span style={{margin: 5, border: "1px solid lime"}}>{"<"}1 - не доделано</span>
                            <span style={{margin: 5, border: "1px solid lime"}}>===1 - норма</span>
                            <span style={{margin: 5, border: "1px solid lime"}}>{"<"}2 - хорошо</span>
                            <span style={{margin: 5, border: "1px solid lime"}}>===2 - отлично</span>
                            <span style={{margin: 5, border: "1px solid lime"}}>{">"}2 - молодец</span>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div>
                        tabs:
                        <button disabled={true}>Mo</button>
                        <button disabled={true}>Tu</button>
                        <button disabled={true}>We</button>
                        <button disabled={true}>Th</button>
                        <button disabled={true}>Fr</button>
                    </div>

                    <div>
                        home works:
                        <button disabled={true}>homework 1</button>
                        <button disabled={true}>hw 2</button>
                        <button disabled={true}>hw 3</button>
                        <button disabled={true}>hw 4</button>
                    </div>
                </div>

                <div style={{color: "orange"}}>
                    search
                </div>

                <div>
                    titles: name telegram github-s gh-pages grade1 grade2 grade3 grade4

                    <button disabled={true}>add students</button>
                </div>

                <div style={{color: "orange"}}>
                    name telegram github-s gh-pages grade1 grade2 grade3 grade4
                    <button disabled={true}>update</button>
                    <button disabled={true}>delete</button>
                </div>
                <div style={{color: "orange"}}>
                    name telegram github-s gh-pages grade1 grade2 grade3 grade4
                    <button disabled={true}>update</button>
                    <button disabled={true}>delete</button>
                </div>
                <div style={{color: "orange"}}>
                    name telegram github-s gh-pages grade1 grade2 grade3 grade4
                    <button disabled={true}>update</button>
                    <button disabled={true}>delete</button>
                </div>

            </div>
        </div>
    );
};

export default App;
