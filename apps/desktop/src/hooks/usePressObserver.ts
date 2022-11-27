// import { strictEqual } from "node:assert";
import { strictEqual } from 'assert';
import { useEffect, useState } from 'react';

interface Settings {
    watchKey: string;
}

export function usePressObserver({ watchKey }: Settings): boolean {
    const [pressed, setPressed] = useState<boolean>(false);

    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
            if (pressed || watchKey !== code) return;

            setPressed(true);
        }

        function handlePressFinish({ code }: KeyboardEvent): void {
            if (!pressed || watchKey !== code) return;
            setPressed(false);
        }

        document.addEventListener('keydown', handlePressStart);
        document.addEventListener('keyup', handlePressFinish);

        return () => {
            document.removeEventListener('keydown', handlePressStart);
            document.removeEventListener('keyup', handlePressFinish);
        };
    }, [watchKey, pressed]);

    return pressed;
}
