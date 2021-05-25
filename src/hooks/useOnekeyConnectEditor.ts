import { useEffect } from "react";
import { editor, languages, Uri } from "monaco-editor/esm/vs/editor/editor.api";
// @ts-ignore
import libSource from '!raw-loader!./types.txt';

let isInitialized = false;

export function useOnekeyConnectEditor() {
    useEffect(() => {
        if (!isInitialized) {
            init();
            isInitialized = true;
        }
    }, [])
}

function init() {
    //monaco
    // validation settings
    languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: false
    });

    // compiler options
    languages.typescript.javascriptDefaults.setCompilerOptions({
        target: languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true
    });

    // extra library
    languages.typescript.javascriptDefaults.addExtraLib(libSource, 'ts:global.d.ts');
    // When resolving definitions and references, the editor will try to use created models.
    // Creating a model for the library allows "peek definition/references" commands to work with the library.
    editor.createModel(libSource, 'typescript', Uri.parse('ts:global.d.ts'));
}
