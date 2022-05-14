import React, { useState } from 'react'
import { Button } from '../sub/Button'
import { Input } from '../sub/Input'

export const Content = () => {

    const [expression, setExpression] = useState({ expression: "" })

    const [result, setResult] = useState("")

    const [message, setMessage] = useState("");

    const change = (e) => {
        const { name, value } = e.target
        setExpression({ [name]: value })

    }

    const clear = (e) => {
        setExpression({ expression: "" })
    }
    const numBtn = (e) => {
        const { name, value } = e.target
        setExpression({ expression: expression.expression + value })
    }

    const num = () => {
        let tem = []
        for (let i = 0; i <= 9; i++) {
            tem.push(i.toString())
        }
        return tem
    }
    let op = ['+', '-', '/', '*','.']

    const res = (e) => {
        setResult(eval(expression.expression))
    }
    const save = (e) => {
        fetch('http://localhost:4000/save', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: result
        })
        
        .then(setMessage("Result saved!"))
        .catch(err => setMessage(err))
            
    }
    const read=(e)=>{
        fetch('http://localhost:4000/read', {
            mode: 'no-cors',
            method: 'get',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
        
        .then((response)=>setExpression(response))
        .catch(err => setMessage(err))
            
    }

    return (
        <div className='container justify-content-center'>
            <Input
                id='expression'
                value={expression.expression}
                change={change}
                type='text'
            />
            <p>={result}</p>
            <div className='d-flex justify-content-center flex-wrap'>
                {num().map((item) => <Button
                    key={item}
                    onClick={numBtn}
                    value={item}
                />)}
            </div>
            <div className='d-flex justify-content-center flex-wrap'>
                {op.map((item) => <Button
                    key={item}
                    onClick={numBtn}
                    value={item}
                />)}
                <Button
                    onClick={res}
                    value='=' />
            </div>
            <div className='d-flex justify-content-center flex-wrap'>  
            <Button
                    onClick={save}
                    value='save'
                />
                <Button
                    onClick={read}
                    value='read'
                />
                <Button
                onClick={clear}
                value='clear' />
            </div>
            <p>{message}</p>
        </div>
    )
}
