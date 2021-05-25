import React, { useEffect, useReducer, useRef, useState } from 'react';
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import OneKeyConnect from "@onekeyhq/connect";
import CodeBlock from '@theme/CodeBlock';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './index.module.css';
import { useOnekeyConnectEditor } from "@src/hooks/useOnekeyConnectEditor";
import { usePopupToggle } from "@src/hooks/usePopupToggle";

const checked = (
    <span className={styles.toggle}>
    ✔
  </span>
);
const unchecked = (
    <span className={styles.toggle}>
    ✖
  </span>
);

interface PlaygroundProps {
    initValue?: string;
}

function Playground(props: PlaygroundProps) {
    useOnekeyConnectEditor();
    const { isDarkTheme } = useThemeContext();
    const [value, setValue] = useState(props.initValue ?? '');
    const [usePopup, setUsePopup] = usePopupToggle();
    const [log, setLog] = useReducer((p, a) => JSON.stringify(a, null, 2), '');
    const editorDivRef = useRef<HTMLDivElement>();
    const editorRef = useRef<editor.IStandaloneCodeEditor>();

    useEffect(() => {
        editorRef.current = editor.create(editorDivRef.current, {
            value: props.initValue,
            language: 'typescript',
            minimap: {
                enabled: false
            }
        });

        editorRef.current.onDidChangeModelContent(() => {
            setValue(editorRef.current.getValue());
        })
    }, []);

    useEffect(() => {
        editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs');
    }, [isDarkTheme]);

    const run = () => {
        (window as any).OneKeyConnect = OneKeyConnect;
        Promise.resolve(eval(value)).then(setLog);
    }

    const changePopup = (e) => {
        setUsePopup(e.target.checked);
    }

    return (
        <>
            <div
                className={styles.editor}
                ref={editorDivRef}
            />
            <div className={styles.actions}>
                <div className={styles.button} onClick={run}>RUN&gt;&gt;</div>
                use popup
                <Toggle checked={usePopup} onChange={changePopup} icons={{ checked, unchecked }} />
            </div>
            {log &&
            <CodeBlock className="json">{log}</CodeBlock>
            }
        </>
    );
}

export default Playground;
