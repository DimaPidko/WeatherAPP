import styles from './home.module.sass'
import WeatherComponent from '../weather-component/WeatherComponent';

const WeatherCard = () => {
    return (
        <div className={styles.card}>
            <WeatherComponent/>
        </div>
    )
}

export default WeatherCard;