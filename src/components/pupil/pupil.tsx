import styles from './pupil.module.scss';
import classNames from 'classnames';

export interface PupilProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-pupils-and-templates
 */
export const Pupil = ({
    className,
    children = 'New Component',
}: PupilProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
