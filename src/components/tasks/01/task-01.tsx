import styles from './task-01.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';

export const Task01 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>01</b> / 10
            </div>
            <div className={styles.title}>Let's Start!</div>
            <ol start={0} className={styles.desc}>
                <li>
                    In this tutorial, you'll learn how you can view and visually
                    edit <b>React</b> components using
                    <b>&nbsp;Codux</b>.
                </li>
                <li>
                    Switch to <TaskSymbol name="preview" /> <b>Preview Mode</b>
                    &nbsp;and hover over the shapes to erase them. Can you see
                    what’s behind?
                </li>
                <li>
                    To reload and bring back the shapes, just click&nbsp;
                    <TaskSymbol name="reload" /> <b>Reload Preview</b>.
                </li>
                <li>
                    When ready, go back to the <TaskSymbol name="home" />
                    <b>Home</b> screen to find your next lessons.
                </li>
            </ol>
        </div>
    );
};
