import Title from 'components/shared/Title/Title';
import css from '../../components/shared/Title/title.module.css';

const HomePage = () => {
  return (
    <div>
      <Title>Home page</Title>
      <p className={css.text}>
        {' '}
        I am a skilled front-end developer with experience in JavaScript and
        TypeScript, and expertise in frameworks like React, React Native,
        Node.js and Three.js. <br /> As a developer, I bring a meticulous eye
        for detail and a precise approach to every project I undertake. With a
        strong commitment to meeting deadlines, I excel at managing my time
        effectively to ensure timely delivery of high-quality work.
        <br />
        Collaboration and teamwork are central to my working philosophy, as I
        firmly believe that while individual talents may win games, it is
        through teamwork that championships are achieved. I actively contribute
        to a positive and harmonious team environment, leveraging my optimism,
        diplomacy, and charisma to foster strong working relationships and open
        lines of communication. Let&apos;s enjoy working together!
      </p>
    </div>
  );
};

export default HomePage;
