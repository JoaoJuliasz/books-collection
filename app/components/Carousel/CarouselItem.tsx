import styles from "./carousel.module.scss";

type Props = {
    children: JSX.Element | JSX.Element[]
    width: string
}

const CarouselItem = ({ children }: Props) => {
    return (
        <div className={styles["carousel-item"]}>
            {children}
        </div>
    );
};

export default CarouselItem