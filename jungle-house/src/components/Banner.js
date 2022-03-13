import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Jungle House'
    return (
        <div className='jh-banner'>
            <img src= {logo} alt='Jungle House' className='jh-logo'/>
            <h1 className='jh-title'>{title}</h1>
     {/*    <div style={{
            color: 'black',
            textAlign: 'right',
            padding: 32,
            borderBottom: 'solid 3px black'
        }}> */}
        
        </div>
    )
}

export default Banner