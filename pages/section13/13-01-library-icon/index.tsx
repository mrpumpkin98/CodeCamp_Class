import {UpCircleOutlined} from "@ant-design/icons";
import { Switch } from 'antd';
import styled from "@emotion/styled";
import type {MouseEvent} from "react";

const MyIcon = styled(UpCircleOutlined)`
    color: gray;
    font-size: 200px;
`



export default function LibraryIconPage():JSX.Element{
    const onClick = (event: MouseEvent<HTMLSpanElement>) : void => {
        console.log(event.currentTarget.id);
    } 

    return(
        <div>
            <MyIcon id="GO" onClick={onClick}/>
            <Switch defaultChecked  />
        </div>
    )
}