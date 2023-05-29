import './App.css';
import React, {useState} from "react";
import data from "./data";
import {nanoid} from "nanoid";

function App() {

    const [count, setCount] = useState(1);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        setText(data.slice(0,amount))

    }

    return (
        <section>
            <h4>boring lorem ipsum</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor='amount'>Paragraphs: </label>
                <input type="number"
                       name="amount"
                       id="amount" min='1'
                       step='1'
                       max='9'
                       value={count}
                       onChange={(e) => setCount(e.target.value)}/>
                <br/>
                <button className='btn' type='submit'>generate</button>
            </form>
            <article>
                {text.map((item)=>{

                    const newId = nanoid()
                    console.log(newId)
                    return (
                        <p key={newId}>
                            {item}
                        </p>
                    )
                })}
            </article>
        </section>
    );
}

export default App;
