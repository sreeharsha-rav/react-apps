import React from 'react';
import styles from "./Business.module.css";

function Business({business}) {
    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={business.imageSrc} alt=""/>
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAddress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{business.category}</h3>
                    <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div> 
            </div>
        </div>
    );
};

export default Business;