import '../styles/Spotify.css';
import Card from './MusicCard';

const MusicSpotify = () => {
  const link =
    'https://open.spotify.com/embed/album/2VLrlocedHBeqnmACWJjgf?utm_source=generator';
  return (
    <div className='lg:flex lg:justify-center'>
      <div className='lg:hidden'>
        <Card />
      </div>
      <iframe
        title='Spotify'
        width='100%'
        height='200'
        src={link}
        frameBorder='0'
        loading='lazy'
      ></iframe>
      <div className='hidden lg:block'>
        <Card />
      </div>
    </div>
  );
};

export default MusicSpotify;