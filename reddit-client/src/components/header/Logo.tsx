import Image from "next/image";

const styles = {
    wrapper: `flex items-center`,
    icon: `w-8 h-8 mx-2`,
    title: `text-xl font-semibold`,
};

const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <Image 
                src="/reddit-icon.png" 
                alt="Reddit Icon" 
                width={32}
                height={32}
                className={styles.icon}
            />
            <h1 className={styles.title}>Reddit Client</h1>
        </div>
    );
};

export default Logo;