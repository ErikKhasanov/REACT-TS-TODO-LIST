import React, {useRef} from "react";

interface ITodoForm {
    onAdd(text: string): void
}

export const InputForm: React.FC<ITodoForm> = (props) => {
    // const [text, setText] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(evt.target.value)
    // }

    const keyPressHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if(evt.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
            // console.log(text)
            // setText('')
        }
    }

    return(
        <div className="input-field mt2">
            <input ref={ref}
                   // onChange={changeHandler}
                   onKeyPress={keyPressHandler}
                   type="text"
                   id="title"
                   placeholder="Введите название"
            />
            <label
                htmlFor="title"
                className="active"
            >
                Введите название
            </label>
        </div>
    )
}