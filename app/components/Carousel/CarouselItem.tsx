import styles from "./carousel.module.scss";

type Props = {
    children: JSX.Element | JSX.Element[]
    width: string
}

const CarouselItem = ({ children }: Props) => {
    return (
        <li className={styles["carousel-item"]}>
            {children}
        </li>
    );
};

export default CarouselItem