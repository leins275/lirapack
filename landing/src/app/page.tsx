import messages from './messages'
import HomeContainer from '@/containers/home-container/HomeContainer';


export default function Home() {
  return (
    <>
      <HomeContainer>
        <h1>{messages.main}</h1>
      </HomeContainer>
    </>
  );
}
