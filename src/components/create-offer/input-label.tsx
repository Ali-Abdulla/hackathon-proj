import {Stack} from "@mui/material";

interface InputLabelProps {
    upperText: string;
    labelText: string;
}

const InputLabel = (props: InputLabelProps) => {
    return (
        <div>
            <div className="input-container-label-upper">
                <label>
                    {props.upperText}
                </label>
            </div>
            <div className="input-container-label">
                <input type="text" placeholder={props.labelText}/>
            </div>
        </div>
    )
}

export default InputLabel;
