import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { contentState, innerText } from '../../Scene/State/recoil_state';

import './buttons.scss';

export const AddContentButton = () => {
    const [activeInput, setActiveInput] = useState(false);
    const [componentName, setComponentName] = useState('');
    const [ContentState, setContentState]: any = useRecoilState(contentState);
    const [text, setInnerText] = useRecoilState(innerText);

    const addContent = () => {
        const validComponentList = ['Text'];
        // ! This is a list of valid components that can be added to the scene.
        if (validComponentList.includes(componentName)) {
            setContentState((oldContent: any) => [
                ...oldContent,
                componentName,
            ]);
        }

        setActiveInput(false);
        console.log(ContentState);
    };

    return (
        <div className="add-content--container">
            {activeInput && (
                <div className="fixed">
                    <input
                        type="text"
                        className="add-content--input"
                        placeholder="Content Name"
                        onChange={(e: any) => {
                            setComponentName(e.target.value);
                        }}
                    />
                    <input
                        className="add-content--input"
                        placeholder="Inner Text"
                        onChange={(e: any) => {
                            setInnerText(e.target.value);
                        }}
                    />
                    <button
                        className="add-content--submit"
                        type="submit"
                        onClick={addContent}
                    >
                        Submit
                    </button>
                </div>
            )}

            {!activeInput && (
                <button
                    className="add-content--btn"
                    onClick={() => setActiveInput(true)}
                >
                    Add Content
                </button>
            )}
        </div>
    );
};
