import styles from './Hero.module.css';
function Hero(){
    return (
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h2>SpiderMan</h2>
            <h3>Genre : Thriller, Drama, Romance</h3>
            <p className={styles.hero__description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              placeat nesciunt enim architecto dicta, eaque, voluptate
              repellendus illum cumque cum similique dignissimos hic. Minima,
              iste harum. Mollitia dolores quod et?
            </p>
            <button className={styles.hero__button}>Watch</button>
          </div>
          <div className={styles.hero__right}>
            <img className={styles.hero__image}
              src="https://picsum.photos/200/300" alt='placeholder'
            />
          </div>
        </section>
      </div>
    );
}

export default Hero;