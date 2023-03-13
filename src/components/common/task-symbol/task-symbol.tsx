import styles from './task-symbol.module.scss';
import type { SymbolName } from './symbols';
import { symbols } from './symbols';

export interface TaskSymbolProps {
    name?: SymbolName;
}

export const TaskSymbol = ({ name = 'empty' }: TaskSymbolProps) => {
    const Symbol = symbols[name];
    return (
        <span>
            <Symbol className={styles[name]} />
        </span>
    );
};
