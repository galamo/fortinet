import { ProgressSpinner } from 'primereact/progressspinner';


export function SpinnerWrapper(props: { isLoading: boolean, children: any }) {
    const { isLoading, children } = props;
    return isLoading ? <ProgressSpinner /> : children
}