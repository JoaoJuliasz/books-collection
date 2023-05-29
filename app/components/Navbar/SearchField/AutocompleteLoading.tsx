'use client'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './searchField.module.scss'

const AutocompleteLoading = () => {

    return (
        <div className={styles.autocomplete}>
            {[...Array(3)].map((item, index) => (
                <div key={index} className={styles.item}>
                    <SkeletonTheme baseColor="#a9a9a9" highlightColor="#e0e0e0" width={"100%"}>
                        <p style={{ width: '40%', margin: '0 10px' }}>
                            <Skeleton width={'100%'} height={20} />
                        </p>
                        <p style={{ width: '40%', margin: '0 10px' }}>
                            <Skeleton width={'100%'} height={20} />
                        </p>
                    </SkeletonTheme>
                </div>
            ))
            }
        </div>
    )
};

export default AutocompleteLoading;